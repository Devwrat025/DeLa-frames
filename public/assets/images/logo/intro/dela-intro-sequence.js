/* DeLa Frames - brand intro card. 458x586, 7.5s loop.
   Four exposures. Nothing drifts: the shutter closes, and what changes,
   changes behind the blades. One render(ctx, t) drives the card and the export. */
(function (root) {
  var W = 458, H = 586, DUR = 7.0;

  var BG = '#0F0F0F',
      BLADE = '#070707',
      INK = '#F2F5EC',
      GREY = '#BCBCBC',
      DIM = '#5E635A',
      LIME = '#B5FF6D',
      SIGNAL = '#00DE51';

  var S = 0.848, MX = 134, MY = 190;
  var F = {
    vx1: MX + 28.5 * S, vx2: MX + 198.5 * S,
    hy1: MY + 28.5 * S, hy2: MY + 186.5 * S,
    vy1: MY + 3 * S,    vy2: MY + 193 * S,
    hx1: MX + 2 * S,    hx2: MX + 223 * S,
    w: 5 * S
  };
  var OPEN = 62;
  var TEXT_Y = 301, WORD_Y = 412, READ_Y = 548;

  /* Four shutter releases. Everything discrete happens at one of these,
     hidden behind the closed blades. */
  var CLICKS = [2.05, 3.55, 4.60, 5.05];
  var CLOSE = 0.105, HOLD = 0.018, OPENT = 0.105;

  var T = {
    furn:  [0.25, 0.95],
    field: [0.20, 0.95],
    l1In:  [0.80, 1.40],
    l2In:  [2.35, 2.95],
    fly:   [3.78, 4.42],
    wordIn:[5.32, 5.86],
    out:   [6.45, 6.95]
  };

  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function span(t, r) { return clamp((t - r[0]) / (r[1] - r[0])); }
  function outCubic(p) { return 1 - Math.pow(1 - p, 3); }
  function outBack(p) { var s = 2.2; p -= 1; return p * p * ((s + 1) * p + s) + 1; }
  function inQuart(p) { return p * p * p * p; }
  function stepped(p, n) { return Math.min(Math.floor(p * n), n - 1) / (n - 1); }
  function mul32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  var PATHS = root.DELA_PATHS, p2d = null, particles = null;

  function build() {
    p2d = { D: new Path2D(PATHS.D), E: new Path2D(PATHS.E), L: new Path2D(PATHS.L), A: new Path2D(PATHS.A) };
    var c = document.createElement('canvas'); c.width = 224; c.height = 194;
    var g = c.getContext('2d', { willReadFrequently: true });
    var pts = [], STEP = 4;
    [['D', LIME], ['E', INK], ['L', INK]].forEach(function (pair) {
      g.clearRect(0, 0, 224, 194);
      g.fillStyle = '#fff'; g.fill(p2d[pair[0]], 'evenodd');
      var d = g.getImageData(0, 0, 224, 194).data;
      for (var y = 2; y < 194; y += STEP)
        for (var x = 2; x < 224; x += STEP)
          if (d[(y * 224 + x) * 4 + 3] > 140) pts.push({ mx: x, my: y, col: pair[1] });
    });
    var rnd = mul32(20260919);
    pts.forEach(function (p) {
      p.tx = MX + p.mx * S; p.ty = MY + p.my * S;
      p.sx = 44 + rnd() * (W - 88);
      p.sy = 92 + rnd() * (H - 230);
      p.jx = rnd(); p.jy = rnd();
      p.accent = rnd() < 0.055;
    });
    particles = pts;
  }
  function ensure() { if (!p2d) build(); }

  /* --- shutter --- */
  function bladeAt(t, k) {
    var c = CLICKS[k];
    var a = c - HOLD / 2 - CLOSE, b = c - HOLD / 2, d = c + HOLD / 2, e = d + OPENT;
    if (t < a || t > e) return 0;
    if (t < b) return inQuart((t - a) / CLOSE);
    if (t <= d) return 1;
    return 1 - outCubic((t - d) / OPENT);
  }
  function shutter(t) {
    var m = 0;
    for (var k = 0; k < CLICKS.length; k++) m = Math.max(m, bladeAt(t, k));
    return m;
  }
  function firedBy(t) { var n = 0; for (var k = 0; k < CLICKS.length; k++) if (t >= CLICKS[k]) n++; return n; }
  /* the bloom is the exposure, not the blackout: it lands as the blades reopen */
  function flashAt(t) {
    var f = 0;
    for (var k = 0; k < CLICKS.length; k++) {
      var d = t - CLICKS[k] - 0.03;
      if (d > 0 && d < 0.13) f = Math.max(f, 1 - d / 0.13);
    }
    return f;
  }

  function mix(h1, h2, p) {
    var a = parseInt(h1.slice(1), 16), b = parseInt(h2.slice(1), 16);
    return 'rgb(' + Math.round((a >> 16 & 255) + ((b >> 16 & 255) - (a >> 16 & 255)) * p) + ',' +
      Math.round((a >> 8 & 255) + ((b >> 8 & 255) - (a >> 8 & 255)) * p) + ',' +
      Math.round((a & 255) + ((b & 255) - (a & 255)) * p) + ')';
  }

  function text(ctx, str, y, size, font, color, alpha, dy, track) {
    if (alpha <= 0.004) return;
    ctx.save();
    ctx.globalAlpha = alpha; ctx.fillStyle = color;
    ctx.font = size + 'px ' + font; ctx.textBaseline = 'alphabetic';
    if (track) {
      var total = 0, i;
      for (i = 0; i < str.length; i++) total += ctx.measureText(str[i]).width + track;
      total -= track;
      var x = W / 2 - total / 2; ctx.textAlign = 'left';
      for (i = 0; i < str.length; i++) { ctx.fillText(str[i], x, y + dy); x += ctx.measureText(str[i]).width + track; }
    } else { ctx.textAlign = 'center'; ctx.fillText(str, W / 2, y + dy); }
    ctx.restore();
  }

  function furniture(ctx, t, a) {
    if (a <= 0.004) return;
    ctx.save();
    ctx.globalAlpha = a;
    ctx.strokeStyle = INK; ctx.lineWidth = 1;
    var m = 26, L = 15;
    [[m, m, 1, 1], [W - m, m, -1, 1], [m, H - m, 1, -1], [W - m, H - m, -1, -1]].forEach(function (c) {
      ctx.beginPath();
      ctx.moveTo(c[0] + c[2] * L, c[1]); ctx.lineTo(c[0], c[1]); ctx.lineTo(c[0], c[1] + c[3] * L);
      ctx.stroke();
    });
    var n = firedBy(t);
    ctx.font = '10px "DFMed",monospace'; ctx.textBaseline = 'alphabetic';
    ctx.globalAlpha = a * 0.8; ctx.fillStyle = DIM; ctx.textAlign = 'left';
    ctx.fillText('\u0192 2.8', 44, READ_Y);
    ctx.fillText('1/125', 90, READ_Y);
    // exposure counter
    ctx.textAlign = 'right';
    ctx.globalAlpha = Math.min(1, a * (n > 0 ? 1.5 : 0.9));
    ctx.fillStyle = n > 0 ? SIGNAL : DIM;
    ctx.fillText('00' + (n + 1), W - 44, READ_Y);
    // four exposures, filling as each is taken
    for (var q = 0; q < 4; q++) {
      var taken = q < n;
      ctx.globalAlpha = Math.min(1, a * (taken ? 1.5 : 0.5));
      ctx.fillStyle = taken ? SIGNAL : DIM;
      ctx.fillRect(W - 120 + q * 11, READ_Y - 4, 7, 2);
    }
    ctx.restore();
  }

  function cropRect(state) {
    var o = state === 1 ? OPEN : 0;
    return {
      vx1: F.vx1 - o, vx2: F.vx2 + o,
      hy1: F.hy1 - o * 0.82, hy2: F.hy2 + o * 0.82,
      vy1: F.vy1 - o * 0.82, vy2: F.vy2 + o * 0.82,
      hx1: F.hx1 - o, hx2: F.hx2 + o
    };
  }

  function drawCrop(ctx, r, alpha, wide) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = INK;
    ctx.lineWidth = wide ? 1.6 : F.w;
    ctx.lineCap = 'butt';
    ctx.beginPath();
    ctx.moveTo(r.vx1, r.vy1); ctx.lineTo(r.vx1, r.vy2);
    ctx.moveTo(r.vx2, r.vy1); ctx.lineTo(r.vx2, r.vy2);
    ctx.moveTo(r.hx1, r.hy1); ctx.lineTo(r.hx2, r.hy1);
    ctx.moveTo(r.hx1, r.hy2); ctx.lineTo(r.hx2, r.hy2);
    ctx.stroke();
    ctx.restore();
  }

  function render(ctx, t) {
    ensure();
    t = ((t % DUR) + DUR) % DUR;

    var fade = 1 - span(t, T.out);
    var n = firedBy(t);
    var sh = shutter(t);

    ctx.save();
    ctx.fillStyle = BG; ctx.fillRect(0, 0, W, H);
    ctx.globalAlpha = fade;

    furniture(ctx, t, span(t, T.furn) * 0.72);

    /* ---- pixels: they never drift. They step, in sync, on a 12fps grid. ---- */
    var solid = n >= 3;
    if (!solid) {
      var flyP = stepped(span(t, T.fly), 5);
      var tick = Math.floor(t * 12);
      var fieldA = span(t, T.field);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        var jx = (((p.jx * 97 + tick * 0.37) % 1) - 0.5) * 5.5 * (1 - flyP);
        var jy = (((p.jy * 131 + tick * 0.29) % 1) - 0.5) * 5.5 * (1 - flyP);
        var x = p.sx + (p.tx - p.sx) * flyP + jx;
        var y = p.sy + (p.ty - p.sy) * flyP + jy;
        var on = ((p.jx * 53 + tick * 0.11) % 1) > 0.28 ? 1 : 0.3;
        var a = fieldA * (0.34 * on + 0.66 * flyP);
        ctx.globalAlpha = fade * clamp(a);
        ctx.fillStyle = flyP > 0.02 ? mix(DIM, p.col, flyP) : (p.accent ? SIGNAL : DIM);
        var sz = 2.3 + 0.9 * flyP;
        ctx.fillRect(x - sz / 2, y - sz / 2, sz, sz);
      }
      ctx.globalAlpha = fade;
    }

    /* ---- copy: arrives softly, is taken away by the shutter ---- */
    var a1 = span(t, T.l1In) * (n >= 1 ? 0 : 1);
    var a2 = span(t, T.l2In) * (n >= 2 ? 0 : 1);
    text(ctx, 'Every pixel,', TEXT_Y, 33, '"DFDisplay",sans-serif', GREY, a1, (1 - outCubic(span(t, T.l1In))) * 8, 0);
    text(ctx, 'perfectly framed.', TEXT_Y, 33, '"DFDisplay",sans-serif', GREY, a2, (1 - outCubic(span(t, T.l2In))) * 8, 0);

    /* ---- the crop never animates. It is where the last exposure put it. ---- */
    if (n >= 1) drawCrop(ctx, cropRect(n >= 2 ? 2 : 1), fade * (n >= 2 ? 1 : 0.5), n < 2);

    /* ---- the mark, captured whole ---- */
    if (solid) {
      ctx.save();
      ctx.translate(MX, MY); ctx.scale(S, S);
      ctx.fillStyle = LIME; ctx.fill(p2d.D, 'evenodd');
      ctx.fillStyle = INK; ctx.fill(p2d.E, 'evenodd'); ctx.fill(p2d.L, 'evenodd');
      ctx.restore();
    }
    if (n >= 4) {
      var settle = clamp((t - CLICKS[3]) / 0.30);
      ctx.save();
      ctx.translate(MX, MY); ctx.scale(S, S);
      ctx.translate(153.5, 150.5);
      var sc = 1 + 0.14 * (1 - outBack(settle));
      ctx.scale(sc, sc);
      ctx.translate(-153.5, -150.5);
      ctx.fillStyle = LIME; ctx.fill(p2d.A, 'evenodd');
      ctx.restore();
    }

    text(ctx, 'DELA FRAMES', WORD_Y, 12.5, '"DFMed",sans-serif', INK,
      span(t, T.wordIn) * 0.92, (1 - outCubic(span(t, T.wordIn))) * 5, 4.2);

    /* ---- blades close over everything ---- */
    if (sh > 0.001) {
      var half = H / 2 * sh;
      ctx.save();
      ctx.globalAlpha = fade;
      ctx.fillStyle = BLADE;
      ctx.fillRect(0, 0, W, half);
      ctx.fillRect(0, H - half, W, half);
      ctx.globalAlpha = fade * 0.55 * sh;
      ctx.fillStyle = INK;
      ctx.fillRect(0, half - 1, W, 1);
      ctx.fillRect(0, H - half, W, 1);
      ctx.restore();
    }
    var fl = flashAt(t);
    if (fl > 0.001) {
      ctx.save();
      ctx.globalAlpha = fade * fl * fl * 0.13;
      ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, W, H);
      ctx.restore();
    }

    ctx.restore();
  }

  root.DelaIntro = { render: render, W: W, H: H, DUR: DUR, CLICKS: CLICKS };
})(window);

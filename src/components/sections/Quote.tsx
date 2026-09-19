/**
 * Full-width banner carrying the pull quote, sitting directly above the site
 * footer. Rendered outside the main content column so it spans the page.
 */
export function Quote() {
  return (
    <div id="quote" className="quote-banner">
      <div className="container">
        <div className="quote-banner-inner effectFade fadeUp no-div">
          <h4 className="quote-banner-text font-3 fw-normal">
            <span className="quote-mark">&ldquo;</span>
            Design is not just what it looks like and feels like. Design is how it works.
            <span className="quote-mark">&rdquo;</span>
          </h4>
          <p className="quote-banner-author font-3 h6">Steve Jobs</p>
        </div>
      </div>
    </div>
  );
}

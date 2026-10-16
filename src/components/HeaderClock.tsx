import { ImageSwitch } from "./ImageSwitch";

/**
 * Mobile header. The local date/time readout that used to sit here has been
 * removed, so this is just the logo now.
 */
export function HeaderClock() {
  return (
    <div className="tf-header-wrap">
      <a href="/" className="logo-site d-lg-none">
        <ImageSwitch
          light="/assets/images/logo/dela-mark-light.png"
          dark="/assets/images/logo/dela-mark-dark.png"
          width={40}
          height={35}
        />
      </a>
    </div>
  );
}

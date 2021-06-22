import React from "react";
import TimeSVG from "../svg/time.svg";

const Header = () => {
  return (
    <div className="header__section">
      <h4 className="header__section--title">
        POMODORO
        <svg
          fill="#eeeeff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="40px"
          height="40px"
        >
          <path d="M 21 2 L 21 5 L 23 5 L 23 6.0976562 C 12.350316 7.1074364 4 16.088822 4 27 C 4 38.586135 13.413865 48 25 48 C 36.586135 48 46 38.586135 46 27 C 46 16.088822 37.649684 7.1074364 27 6.0976562 L 27 5 L 29 5 L 29 2 L 21 2 z M 40.236328 5.1464844 L 38.230469 7.1523438 L 42.845703 11.767578 L 44.851562 9.7617188 L 40.236328 5.1464844 z M 25 8 C 35.505255 8 44 16.494745 44 27 C 44 37.505255 35.505255 46 25 46 C 14.494745 46 6 37.505255 6 27 C 6 16.494745 14.494745 8 25 8 z M 14.990234 15.990234 A 1.0001 1.0001 0 0 0 14.292969 17.707031 L 23.070312 26.484375 A 2 2 0 0 0 23 27 A 2 2 0 0 0 25 29 A 2 2 0 0 0 25.517578 28.931641 L 27.292969 30.707031 A 1.0001 1.0001 0 1 0 28.707031 29.292969 L 26.929688 27.515625 A 2 2 0 0 0 27 27 A 2 2 0 0 0 25 25 A 2 2 0 0 0 24.482422 25.068359 L 15.707031 16.292969 A 1.0001 1.0001 0 0 0 14.990234 15.990234 z" />
        </svg>
      </h4>
      {/* <TimeSVG /> */}
      <div className="header__section--info">
        <p className="header__section--info-title">Sites</p>
      </div>
    </div>
  );
};

export default Header;

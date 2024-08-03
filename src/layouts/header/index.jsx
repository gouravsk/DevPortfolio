import { useState } from "react";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <header id="header" className="py-6 md:py-8 ">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center -mx-4">
            <div className="w-auto px-4">
              <a
                href="/"
                className="text-2xl font-bold inline-block ease-in-out duration-300 leading-none"
              >
                DevPortfo<span className="text-orange-500">///</span>o{" "}
              </a>
            </div>
            <div className="w-auto px-4">
              <button
                className={`relative  md:hidden ${
                  isToggled ? "" : "animate-bounce"
                }`}
                onClick={handleChange}
              >
                <div
                  className={`relative flex items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-orange-500  ring-orange-500  ring-opacity-30 duration-200 shadow-md ${
                    isToggled ? "ring-4" : "ring-0"
                  }`}
                >
                  <div
                    className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300  origin-center ${
                      isToggled ? "-rotate-[45deg]" : "rotate-[unset]"
                    }`}
                  >
                    <span
                      className={`bg-white  w-1/2 rounded transform transition-all duration-300 group-focus: origin-right delay-75 group-focus: ${
                        isToggled
                          ? "-translate-y-[1px] h-[1px] -rotate-90"
                          : "h-[2px]"
                      }`}
                    ></span>
                    <span className="bg-white h-[1px] rounded"></span>
                    <span
                      className={`bg-white w-1/2 rounded self-end transform transition-all duration-300 origin-left delay-75 ${
                        isToggled
                          ? "-translate-y-[1px] h-[1px] -rotate-90"
                          : "h-[2px]"
                      } `}
                    ></span>
                  </div>
                </div>
              </button>
              <div
                id="main-navigation"
                className={`max-[767px]:flex max-[767px]:fixed max-[767px]:top-[95px] max-[767px]:left-0 transform transition-all  max-[767px]:z-[99] max-[767px]:w-full max-[767px]:h-[calc(100%-95px)]`}
              >
                <div
                  className={`w-[30%] flex  md:hidden justify-center p-6 bg-orange-100 max-[767px]:h-full max-[767px]:absolute max-[767px]:top-0 max-[767px]:transform max-[767px]:transition-all max-[767px]:duration-[0.6s]  ${
                    isToggled
                      ? "max-[767px]:left-0"
                      : "max-[767px]:-left-[100%]"
                  }`}
                >
                  <div className="w-full h-full overflow-y-auto">
                    <ul className="flex flex-col items-center">
                      <li
                        className={`w-[38px] h-[38px] mb-4 relative transform transition-all duration-[0.4s] ${
                          isToggled
                            ? "max-[767px]:left-0 delay-[0.2s]"
                            : "max-[767px]:-left-[100%]"
                        }`}
                      >
                        <a href="#">
                          <svg viewBox="0 0 50 50">
                            <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                          </svg>
                        </a>
                      </li>
                      <li
                        className={`w-[38px] h-[38px] mb-4 relative transform transition-all duration-[0.4s] ${
                          isToggled
                            ? "max-[767px]:left-0 delay-[0.25s]"
                            : "max-[767px]:-left-[100%]"
                        }`}
                      >
                        <a href="#">
                          {" "}
                          <svg viewBox="0 0 50 50">
                            <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"></path>
                          </svg>
                        </a>
                      </li>
                      <li
                        className={`w-[38px] h-[38px] mb-4 relative transform transition-all duration-[0.4s] ${
                          isToggled
                            ? "max-[767px]:left-0 delay-[0.3s]"
                            : "max-[767px]:-left-[100%]"
                        }`}
                      >
                        <a href="#">
                          {" "}
                          <svg viewBox="0 0 48 48">
                            <path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`max-[767px]:w-[70%] max-[767px]:p-6 max-[767px]:bg-orange-500 max-[767px]:h-full max-[767px]:absolute max-[767px]:top-0 max-[767px]:transform max-[767px]:transition-all max-[767px]:duration-[0.6s]  ${
                    isToggled
                      ? "max-[767px]:right-0"
                      : "max-[767px]:-right-[100%]"
                  }`}
                >
                  <div className="h-full overflow-y-auto">
                    <ul className="flex flex-wrap flex-col md:flex-row">
                      <li
                        className={`group h-6 relative overflow-y-hidden mb-4 md:me-8 transform transition-all duration-[0.4s]  ${
                          isToggled
                            ? "max-[767px]:left-0 delay-[0.2s]"
                            : "max-[767px]:-left-[100%]"
                        }`}
                      >
                        <a
                          className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500"
                          href="/"
                        >
                          Home
                        </a>
                        <a
                          className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li
                        className={`group h-6 relative overflow-y-hidden mb-4 md:me-8 transform transition-all duration-[0.4s] ${
                          isToggled
                            ? "max-[767px]:left-0 delay-[0.25s]"
                            : "max-[767px]:-left-[100%]"
                        }`}
                      >
                        <a
                          className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500"
                          href="/"
                        >
                          About
                        </a>
                        <a
                          className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500"
                          href="/"
                        >
                          About
                        </a>
                      </li>
                      <li
                        className={`group h-6 relative overflow-y-hidden mb-4 md:me-8 transform transition-all duration-[0.4s] ${
                          isToggled
                            ? "max-[767px]:left-0 delay-[0.3s]"
                            : "max-[767px]:-left-[100%]"
                        }`}
                      >
                        <a
                          className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500"
                          href="/"
                        >
                          Tech Stack
                        </a>
                        <a
                          className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500"
                          href="/"
                        >
                          Tech Stack
                        </a>
                      </li>
                      <li
                        className={`group h-6 relative overflow-y-hidden mb-4 md:me-8 transform transition-all duration-[0.4s] ${
                          isToggled
                            ? "max-[767px]:left-0 delay-[0.35s]"
                            : "max-[767px]:-left-[100%]"
                        }`}
                      >
                        <a
                          className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500"
                          href="/"
                        >
                          Projects
                        </a>
                        <a
                          className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500"
                          href="/"
                        >
                          Projects
                        </a>
                      </li>
                      <li
                        className={`group h-6 relative overflow-y-hidden mb-4 md:me-8  md:last:me-0 last:mb-0 transform transition-all duration-[0.4s] ${
                          isToggled
                            ? "max-[767px]:left-0 delay-[0.4s]"
                            : "max-[767px]:-left-[100%]"
                        }`}
                      >
                        <a
                          className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500"
                          href="/"
                        >
                          Contact
                        </a>
                        <a
                          className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500"
                          href="/"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

import React, { useState } from 'react';

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
              <a href="/" className="text-2xl font-bold inline-block ease-in-out duration-300 leading-none">
                DevPortfo<span className="text-orange-500">///</span>o </a>
            </div>
            <div className="w-auto px-4">
              <button className={`relative  md:hidden ${isToggled ? '' : 'animate-bounce'}`} onClick={handleChange}>
                <div className={`relative flex items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-orange-500  ring-orange-500  ring-opacity-30 duration-200 shadow-md ${isToggled ? 'ring-4' : 'ring-0'}`}>
                  <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300  origin-center ${isToggled ? '-rotate-[45deg]' : 'rotate-[unset]'}`}>
                    <span className={`bg-white  w-1/2 rounded transform transition-all duration-300 group-focus: origin-right delay-75 group-focus: ${isToggled ? '-translate-y-[1px] h-[1px] -rotate-90' : 'h-[2px]'}`}></span>
                    <span className="bg-white h-[1px] rounded"></span>
                    <span className={`bg-white w-1/2 rounded self-end transform transition-all duration-300 origin-left delay-75 ${isToggled ? '-translate-y-[1px] h-[1px] -rotate-90' : 'h-[2px]'} `}></span>
                  </div>
                </div>
              </button>
              <div id="main-navigation" className={`max-[767px]:flex max-[767px]:fixed max-[767px]:top-[95px] max-[767px]:left-0 transform transition-all  max-[767px]:z-[99] max-[767px]:w-full max-[767px]:h-[calc(100%-95px)]`}>
                <div className={`w-[30%] flex  md:hidden justify-center p-6 bg-orange-100 max-[767px]:h-full max-[767px]:absolute max-[767px]:top-0 max-[767px]:transform max-[767px]:transition-all max-[767px]:duration-[0.6s]  ${isToggled ? 'max-[767px]:left-0':'max-[767px]:-left-[100%]'}`}>
                  <div className="w-full h-full overflow-y-auto">
                    <ul className='flex flex-col items-center'>
                      <li className={`w-[44px] h-[44px] mb-4 relative transform transition-all duration-[0.4s] ${isToggled ? 'max-[767px]:left-0 delay-[0.2s]' : 'max-[767px]:-left-[100%]'}`}>
                        <a href="#"><svg viewBox="0 0 512 512"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" />
                        </svg></a>
                      </li>
                      <li className={`w-[44px] h-[44px] mb-4 relative transform transition-all duration-[0.4s] ${isToggled ? 'max-[767px]:left-0 delay-[0.25s]' : 'max-[767px]:-left-[100%]'}`}>
                        <a href="#"> <svg viewBox="0 0 512 512"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z" /></svg></a>
                      </li>
                      <li className={`w-[44px] h-[44px] mb-4 relative transform transition-all duration-[0.4s] ${isToggled ? 'max-[767px]:left-0 delay-[0.3s]' : 'max-[767px]:-left-[100%]'}`}>
                        <a href="#"> <svg viewBox="0 0 512 512"><g><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" /><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" /><circle cx="351.5" cy="160.5" r="21.5" /></g></svg></a>
                      </li>
                    </ul>
                  </div>

                </div>
                <div className={`max-[767px]:w-[70%] max-[767px]:p-6 max-[767px]:bg-orange-500 max-[767px]:h-full max-[767px]:absolute max-[767px]:top-0 max-[767px]:transform max-[767px]:transition-all max-[767px]:duration-[0.6s]  ${isToggled ? 'max-[767px]:right-0':'max-[767px]:-right-[100%]'}`}>
                  <div className="h-full overflow-y-auto">
                    <ul className="flex flex-wrap flex-col md:flex-row">
                      <li className={`group h-6 relative overflow-y-hidden mb-4 md:me-8 transform transition-all duration-[0.4s]  ${isToggled ? 'max-[767px]:left-0 delay-[0.2s]' : 'max-[767px]:-left-[100%]'}`}>
                        <a className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500" href="/">Home</a>
                        <a className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500" href="/">Home</a>
                      </li>
                      <li className={`group h-6 relative overflow-y-hidden mb-4 md:me-8 transform transition-all duration-[0.4s] ${isToggled ? 'max-[767px]:left-0 delay-[0.25s]' : 'max-[767px]:-left-[100%]'}`}>
                        <a className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500" href="/">About</a>
                        <a className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500" href="/">About</a>
                      </li>
                      <li className={`group h-6 relative overflow-y-hidden mb-4 md:me-8 transform transition-all duration-[0.4s] ${isToggled ? 'max-[767px]:left-0 delay-[0.3s]' : 'max-[767px]:-left-[100%]'}`}>
                        <a className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500" href="/">Tech Stack</a>
                        <a className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500" href="/">Tech Stack</a>
                      </li>
                      <li className={`group h-6 relative overflow-y-hidden mb-4 md:me-8 transform transition-all duration-[0.4s] ${isToggled ? 'max-[767px]:left-0 delay-[0.35s]' : 'max-[767px]:-left-[100%]'}`}>
                        <a className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500" href="/">Projects</a>
                        <a className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500" href="/">Projects</a>
                      </li>
                      <li className={`group h-6 relative overflow-y-hidden mb-4 md:me-8  md:last:me-0 last:mb-0 transform transition-all duration-[0.4s] ${isToggled ? 'max-[767px]:left-0 delay-[0.4s]' : 'max-[767px]:-left-[100%]'}`}>
                        <a className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500" href="/">Contact</a>
                        <a className="block ease-in-out duration-300 lg:text-lg font-bold group-hover:-translate-y-[28px] md:group-hover:text-orange-500" href="/">Contact</a>
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
  )
}

export default Header
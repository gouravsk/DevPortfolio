const Banner = () => {
  return (
    <div className="py-10 lg:py-20 relative">
      <div className="container">
        <div className="flex justify-center -mx-4">
          <div className="lg:w-2/3 px-4 text-center">
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-bold mb-5">
              Hello, I'm<br></br> a Frontend Developer
            </h1>
            <p className="md:text-lg font-medium mb-6 md:mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              aut atque officiis dolorum, sequi vero, deserunt iusto totam
              veritatis tempore explicabo consectetur similique vitae hic
              numquam! Provident ab ullam asperiores!
            </p>
            <a
              href="#"
              className="me-4 inline-block px-4 py-3 bg-white text-black font-bold text-lg rounded-lg border-[3px] border-white relative overflow-hidden before:content-[''] before:w-full before:h-full before:duration-[0.4s] before:absolute before:top-full before:left-0 before:bg-orange-500 before:scale-0 before:z-[1] hover:before:top-0 hover:before:rotate-180 hover:before:scale-100 hover:text-white"
            >
              <span className="relative z-[2]">Connect with Me</span>
            </a>
            <a
              href="#"
              className="inline-block px-4 py-3 bg-white text-black font-bold text-lg rounded-lg border-[3px] border-white relative overflow-hidden before:content-[''] before:w-full before:h-full before:duration-[0.4s] before:absolute before:top-full before:left-0 before:bg-orange-500 before:scale-0 before:z-[1] hover:before:top-0 hover:before:rotate-180 hover:before:scale-100 hover:text-white"
            >
              <span className="relative z-[2]">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import "./canva-animation";
const Banner = () => {
  return (
    <div className="py-10 lg:py-20 relative">
      <canvas id="test" className="absolute left-0  top-0"></canvas>
      <div className="container">
        <div className="flex -mx-4">
          <div className="w-2/3 px-4">
            <h1 className="text-6xl xl:text-8xl font-bold mb-5">
              Hello, I'm<br></br> a Frontend Developer
            </h1>
            <p className="text-lg font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              aut atque officiis dolorum, sequi vero, deserunt iusto totam
              veritatis tempore explicabo consectetur similique vitae hic
              numquam! Provident ab ullam asperiores!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

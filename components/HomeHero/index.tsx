const HomeHero: React.FC = () => {
  return (
    <div className="relative w-screen bg-cover bg-center bg-home-hero custom-height-home-hero ">
      <div className="absolute h-full text-white w-full flex-grow flex flex-col items-start top-20 sm:top-1/4 sm:items-start p-3 sm:p-7">
        <h1 className="font-bold text-4xl sm:text-7xl mb-4">
          What time is it? <br /> Parking time!
        </h1>
        <p className="text-lg sm:text-2xl font-mono mt-1">
          Digital parking disc - directly on your mobile. <br className="hidden sm:inline-block" />{" "}
          A winning concepts in a new, digitalized format
        </p>
        <div className="mt-14 sm:mt-6 w-full flex flex-col sm:flex-row ">
          <button className="rounded-3xl sm:w-48 w-full px-5 py-2 sm:py-2 bg-white text-black mb-2 sm:mb-0 sm:me-3 custom-hover-home-hero-contact-us-button ">
            Contact us
          </button>
          <button className="rounded-3xl sm:w-48 w-full px-5 py-2 sm:py-2 bg-black text-white custom-hover-home-hero-download-button">
            Download app
          </button>
        </div>
      </div>
      <div className="absolute p-1 sm:p-3 bottom-0 left-0 w-full bg-green bg-opacity-80">
        <ul className="flex flex-col sm:flex-row gap-2 list-disc">
          <div className="flex justify-around basis-1/2">
            <li className="text-white text-start">Easy to use</li>
            <li className="text-white text-start">Convenience</li>
          </div>
          <div className="flex justify-around basis-1/2">
            <li className="text-white text-start">Free to download</li>
            <li className="text-white text-start">Increased Revenue</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HomeHero;

import React from "react";
import Image from "next/image"; // Ensure the file './Image.tsx' exists in the same directory

const Hero = () => {
  return (
    <div className="w-full p-0 lg:p-10 pb-[40vmin] pt-[40vmin] md:pt-0 md:pb-0 md:h-[87vh] bg-[#3C3C3C]">
      <div className="mt-[-5vmin] lg:mt-[-2.75vmin] flex flex-col gap-y-10 justify-center  items-center border-white h-full w-full">
        <Image
          src="/Icons/blogger.png"
          alt="blog-logo"
          width={110}
          height={110}
        />
        <div className="flex justify-center items-center gap-x-5">
          <h1 className="text-5xl lg:text-[14vmin] font-sans font-bold text-white">
            Curio<span className="text-[#ff5757]">Volved</span>
          </h1>
        </div>

        <h5 className="text-white">
          ( Evolve your curiosity with CurioVolved )
        </h5>
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="w-[80vw] md:w-[45vw] h-12 bg-white placeholder-gray-400 focus:outline-none pl-5"
            placeholder="search your blogs..."
          />
          <div className=" h-12 w-15 bg-[#ff5757] flex justify-center items-center">
            <Image
              src="/Icons/search-interface-symbol.png"
              alt="Search Icon"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

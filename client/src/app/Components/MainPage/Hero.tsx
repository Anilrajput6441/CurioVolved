import React from "react";
import Image from "next/image"; // Ensure the file './Image.tsx' exists in the same directory

const Hero = () => {
  return (
    <div className="w-full p-0 md:p-20 pb-[40vmin] pt-[40vmin] md:pt-0 md:pb-0 md:h-[85vh] bg-[#3C3C3C]">
      <div className="flex flex-col gap-y-7 justify-center  items-center border-white h-full w-full">
        <div className="flex justify-center items-center gap-x-5">
          <Image
            src="/Icons/blogger.png"
            alt="blog-logo"
            width={70}
            height={70}
          />
          <h1 className="text-5xl md:text-8xl font-sans font-bold text-white">
            Curio<span className="text-[#ff5757]">Volved</span>
          </h1>
        </div>

        <h5 className="text-white">( Evolve your curiosity with CurioVolved )</h5>
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="w-[80vw] md:w-[45vw] h-13 bg-white placeholder-gray-400 focus:outline-none pl-5"
            placeholder="search your blogs..."
          />
          <div className=" h-13 w-15 bg-[#ff5757] flex justify-center items-center">
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

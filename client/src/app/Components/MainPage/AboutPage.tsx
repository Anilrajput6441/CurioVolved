import React from "react";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen w-[99vw] ">
      <div className=" relative  w-[99vw]  lg:w-[50%] h-[50vh] lg:h-[85vh] ">
        <div className="imageBox  absolute w-[100%] h-full">
          <div className="img1 absolute z-[40] top-[10%] left-[2%] lg:top-[12%] lg:left-[10%]">
            <Image
              src="/Icons/business.jpg"
              alt="Business"
              className="hidden lg:block"
              width={400}
              height={400}
            />

            <Image
              src="/Icons/business.jpg"
              alt="Business"
              className="block lg:hidden"
              width={250}
              height={250}
            />
          </div>
          <div className="img2 absolute z-[60] top-[50%] left-[30%] lg:top-[50%] lg:left-[30%]">
            <Image
              src="/Icons/corporate.jpeg"
              alt="Business"
              className="hidden lg:block"
              width={450}
              height={450}
            />

            <Image
              src="/Icons/corporate.jpeg"
              alt="Business"
              className="block lg:hidden"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
      <div className="rightHolder w-[99vw] lg:w-[50%] h-full border-1 ">
        <header>
          <h1 className="text-[11vmin] lg:text-[9vmin] font-extrabold mt-[1vmin] lg:mt-[8vmin] ml-3 lg:ml-8">
            About
            <span className="text-[#ff5757]">&nbsp;Us</span>
          </h1>
        </header>
      </div>
    </div>
  );
};

export default AboutPage;

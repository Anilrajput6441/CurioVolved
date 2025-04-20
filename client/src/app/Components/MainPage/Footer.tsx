import React from "react";
import Image from "next/image";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    <div className="bg-[#3C3C3C] w-full pb-8 pt-8 lg:pt-12 lg:pb-12  text-white flex flex-col justify-center items-center p-4">
      {" "}
      <div className="flex gap-x-5 items-center justify-center">
        <Image
          src="/Icons/blogger.png"
          alt="CurioVolved Logo"
          width={70}
          height={70}
        />
        <h1 className="text-4xl md:text-7xl font-sans font-bold">
          Curio<span className="text-[#ff5757]">Volved</span>
        </h1>
      </div>
      <div className="flex justify-center mt-10  items-center ">
        <input
          type="text"
          className="w-[75vw] md:w-[45vw] h-13 bg-white placeholder-gray-400 text-black focus:outline-none pl-5"
          placeholder="Enter your email..."
        />
        <div className=" h-13 w-15 bg-[#ff5757] flex justify-center items-center">
          <Image
            src="/Icons/telegram.png"
            alt="Search Icon"
            width={30}
            height={30}
          />
        </div>
      </div>


      <div className="footerInfo">
        <FooterInfo/>
      </div>
      
    </div>
  );
};

export default Footer;

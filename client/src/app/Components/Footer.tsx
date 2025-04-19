import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#3C3C3C] w-full h-[80vh] flex flex-col justify-center items-center">
      {" "}
      <div className="flex gap-x-5 items-center justify-center">
        <Image
          src="/Icons/blogger.png"
          alt="CurioVolved Logo"
          width={70}
          height={70}
        />
        <h1 className="text-4xl md:text-8xl font-sans font-bold">
          Curio<span className="text-[#ff5757]">Volved</span>
        </h1>
      </div>
      <div className="flex justify-center mt-10  items-center">
        <input
          type="text"
          className="w-[80vw] md:w-[45vw] h-13 bg-white placeholder-gray-400 placeholder:italic pl-5"
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
      <div className="flex justify-evenly pr-1 md:pr-10 text-xs md:text-lg w-full mt-10">
        <div className="flex flex-col items-center ">
          <Image
            src="/Icons/placeholder.png"
            alt=""
            width={150}
            height={150}
            className="h-10 md:h-35  w-10 md:w-35"
          />
          <a
            href="https://maps.app.goo.gl/zy6YeAHV175PCzfy8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center "
          >
            <p className="mt-5 ">IIMT LBF Incubation Center</p>
            <p> 1 st Floor,Greater Noida, UP,201310</p>
          </a>
        </div>
        <div className="flex flex-col mr-5 items-center">
          <a
            href="mailto:codemap2024@gmail.com"
            className="flex flex-col items-center"
          >
            <Image
              src="/Icons/mail.png"
              alt=""
              width={150}
              height={150}
              className="h-10 md:h-45  w-10 md:w-45 "
            />
            <p className="">codemap2024@gmail.com</p>
          </a>
        </div>
        <div className="flex flex-col items-center ">
          {" "}
          <Image
            src="/Icons/phone-call.png"
            alt=""
            width={120}
            height={120}
            className="h-10 md:h-35  w-10 md:w-35"
          />
          <a href="tel:+91 7585824862" className="mt-10">
            +91 7585824862
          </a>
          <a href="tel:+91 9382993983">+91 9382993983</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React from "react";
import BlogCard from "./BlogCard";

const OurBlogs = () => {
  const [selected, setSelected] = React.useState("Technical");

  const bgCss = (title: string) => {
    if (selected === title) {
      return "bg-[#FF5757] text-white border-[black]";
    }
    return "bg-[#F8F6F6] text-black";
  };
  return (
    <div className="mt-1 md:p-6 text-black ">
      <h1 className="text-[11vmin] lg:text-[9vmin] font-extrabold w-full pl-1">
        Top <span className="text-[#ff5757]">Blogs</span>
      </h1>
      <p className="pl-4 md:text-sm mt-2">// Our Categories</p>
      <div className="flex w-full mt-4 justify-center ">
        <div className="flex flex-wrap w-[100%] md:w-[60%] pt-2 pb-2 border-1 rounded border-gray-300 justify-center items-center gap-x-3 lg:gap-x-8 gap-y-2">
          <div
            className={`border-1 rounded border-gray-300  pt-2 pb-2 pl-4 pr-4 cursor-pointer transition-colors duration-500 ease-in-out ${bgCss(
              "Technical"
            )}`}
            onClick={() => {
              setSelected("Technical");
            }}
          >
            Technical{" "}
          </div>
          <div
            className={`border-1 rounded border-gray-300 pt-2 pb-2 pl-4 pr-4  cursor-pointer transition-colors duration-500 ease-in-out ${bgCss(
              "Business"
            )}`}
            onClick={() => {
              setSelected("Business");
            }}
          >
            Business
          </div>

          <div
            className={`border-1 rounded border-gray-300 pt-2 pb-2 pl-4 pr-4  cursor-pointer transition-colors duration-500 ease-in-out ${bgCss(
              "Placements"
            )}`}
            onClick={() => {
              setSelected("Placements");
            }}
          >
            Placements
          </div>
          <div
            className={`border-1 rounded border-gray-300  pt-2 pb-2 pl-4 pr-4 cursor-pointer transition-colors duration-500 ease-in-out ${bgCss(
              "Finance"
            )}`}
            onClick={() => {
              setSelected("Finance");
            }}
          >
            Finance
          </div>
          <div
            className={`border-1  border-gray-300  pt-2 pb-2 pl-4 pr-4 rounded cursor-pointer transition-colors duration-500 ease-in-out  ${bgCss(
              "Lifestyle"
            )}`}
            onClick={() => {
              setSelected("Lifestyle");
            }}
          >
            Lifestyle
          </div>
        </div>
      </div>

      <BlogCard selected={selected} />
    </div>
  );
};

export default OurBlogs;

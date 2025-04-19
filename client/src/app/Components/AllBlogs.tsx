/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React from "react";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
  const [selected, setSelected] = React.useState("Technical");

  const bgCss = (title: string) => {
    if (selected === title) {
      return "bg-[#FF5757] text-white border-[black]";
    }
    return "bg-[#F8F6F6] text-black";
  };
  return (
    <div className="mt-5 md:p-10 text-black ">
      <h1 className="w-full pl-5 font-semibold text-5xl">
        All <span className="text-[#ff5757]">Blogs</span>
      </h1>
      <p className="pl-5">// Our Categories</p>
      <div className="flex w-full mt-10 justify-center ">
        <div className="flex w-[100%] md:w-[60%] pt-2 pb-2 border-1 rounded border-gray-300 justify-evenly items-center">
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

export default AllBlogs;

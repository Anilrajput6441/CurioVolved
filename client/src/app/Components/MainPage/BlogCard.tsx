/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import blogsData from "@/app/data/blogs.json";

interface BlogCardProps {
  selected: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ selected }) => {
  const filteredData = blogsData.filter((blog) => blog.category === selected);
  const [visibleCount, setVisibleCount] = React.useState(5);

  // const handleLoadMore = () => {
  //   setVisibleCount((prev) => prev + 4); // show 4 more on each click
  // };

  const visibleBlogs = filteredData.slice(0, visibleCount);

  return (
    <div>
      <div className="flex gap-x-10  gap-y-5 flex-wrap justify-center mt-10  md:mt-5 p-5">
        {visibleBlogs.slice(0,4).map((blog) => (
          <Link
            href={`/blog/${blog.id}/${blog.title.replaceAll("/","_")}`}
            key={blog.id}
            className=" md:w-[22%] cursor-pointer h-full p-3 border-1 border-gray-400 shadow-lg"
          >
            <Image
              src={blog.image}
              alt="Blog Image"
              width={400}
              height={300}
              className=""
            />
            <div className=" md:text-xs p-1 absolute bg-[#FF5757] rounded mt-2 pl-1 pr-1 text-white text-center">
              {blog.topic}
            </div>
            <h1 className="mt-10 text-lg font-extrabold h-15  overflow-hidden">
              {blog.title}
            </h1>
            <p className="text-xs  h-21 overflow-hidden">{blog.description}</p>
          </Link>
        ))}
      </div>
      {/* <div className="w-full text-center">
        {visibleCount < filteredData.length && (
          <button
            onClick={handleLoadMore}
            className=" mt-5 px-6 py-2 rounded bottom-0 bg-[#FF5757] text-white hover:bg-[#e44747] transition-colors duration-300"
          >
            Load More
          </button>
        )}
      </div> */}
    </div>
  );
};

export default BlogCard;

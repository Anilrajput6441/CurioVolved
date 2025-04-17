/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React from "react";
import { useState } from "react";

const OurBlogs = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <p className="text-center">🏠 Welcome to Home</p>;
      case "about":
        return <p className="text-center">📘 About Us Section</p>;
      case "services":
        return <p className="text-center">🛠️ Our Services</p>;
      case "contact":
        return <p className="text-center">📞 Contact Information</p>;
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="p-10 text-black ">
        <h1 className="w-full font-semibold text-5xl">
          Our <span className="text-[#ff5757]">Blogs</span>
        </h1>
        <p>// Our Categories</p>
      </div>

      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
        <div className="flex justify-between mb-4">
          <button
            onClick={() => setActiveTab("home")}
            className={`px-4 py-2 rounded ${
              activeTab === "home" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`px-4 py-2 rounded ${
              activeTab === "about" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`px-4 py-2 rounded ${
              activeTab === "services"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-4 py-2 rounded ${
              activeTab === "contact" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Contact
          </button>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg">{renderContent()}</div>
      </div>
    </div>
  );
};

export default OurBlogs;

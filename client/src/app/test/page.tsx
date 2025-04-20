"use client";
import React from "react";
// import TestLayout from "./TestLayout";
import Navoptswitcher from "../Components/General/Navoptswitcher";
import Barcomponent from "./Barcomponent";
import { useState } from "react";
const Page = () => {
  const navOptions = [
    {
      title: "Add",
      Component: () => (
        <>
          <p>Add Form</p>
        </>
      ),
    },
    {
      title: "Update",
      Component: () => (
        <>
          <p>Update Form</p>
        </>
      ),
    },
    {
      title: "Delete",
      Component: () => (
        <>
          <p>Delete Form</p>
        </>
      ),
    },
  ];
  const [selected, setSelected] = useState(0);
  const SelectedComponent = navOptions[selected].Component;
  return (
    <>
      <div className="w-[100vw] flex justify-center mt-10">
        <Barcomponent>
          {navOptions.map((option, index) => (
            <>
              <Navoptswitcher
                title={option.title}
                id={index}
                style={
                  index === selected
                    ? { backgroundColor: "orange", color: "white" }
                    : { backgroundColor: "#c3c3c3", color: "black" }
                }
                Component={option.Component}
                key={index}
                onClick={() => {
                  console.log(index);
                  setSelected(index);
                }}
              />
            </>
          ))}
        </Barcomponent>
      </div>
      <div className="mt-6">
        <SelectedComponent />
      </div>
    </>
  );
};

export default Page;

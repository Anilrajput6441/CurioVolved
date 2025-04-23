//Hooks - Hooks are special functions that let you “hook into” React features
//Component Life Cycle
// mounting -> render -> unmounting -> repeat
// option -> State Variable -> When the state changes, the component re-renders
// State variables -> are variables that are declared inside a component rendered.
// 1. useState: This hook lets you add state to your functional components.
// 2. useEffect: This hook(function) get called whenever a component rendered.
"use client";
import React from "react";
interface NavoptswitcherProps {
  title: string;
  key: number;
  id: number;
  onClick: () => void;
  Component: React.FC | React.ComponentType;
  style: React.CSSProperties;
}

const Navoptswitcher: React.FC<NavoptswitcherProps> = (props) => {
  const { title, id, onClick, style } = props;

  return (
    <>
      <div
        id={String(id)}
        style={style}
        className="ease-out duration-300 box  text-black px-5 py-5 pt-1 pb-1 lg:px-8 lg:py-8 lg:pt-2 lg:pb-2 flex justify-center items-center"
        onClick={onClick}
      >
        {title}
      </div>
    </>
  );
};

export default Navoptswitcher;

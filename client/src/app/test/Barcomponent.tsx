import React, { ReactNode } from "react";

interface BarcomponentProps {
  children: ReactNode;
}

const Barcomponent: React.FC<BarcomponentProps> = ({ children }) => {
  return (
    <div className="bar flex justify-center items-center gap-x-8 lg:gap-x-16 border-gray-300 border-[1px] rounded-md w-[90vw] lg:w-[50vw] p-4">
      {children}
    </div>
  );
};

export default Barcomponent;

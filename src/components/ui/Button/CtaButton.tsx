'use client'
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const CtaButton: React.FC<Props> = ({ children, className = "", ...rest }) => {
  return (
    <button
      className={`bg-green hover:bg-green-700 transition duration-500 whitespace-nowrap text-center text-white py-2 px-8 rounded-md border-b-[4px] border-green-700 font-medium ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CtaButton;

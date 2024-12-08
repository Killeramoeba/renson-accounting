import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <a
      className="text-lg font-bold bg-black text-white py-2 px-8 tracking-widest hover:bg-red-600 transition-colors duration-300 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Button;

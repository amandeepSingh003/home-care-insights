// components/Button.tsx

import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="border rounded-md text-sm font-medium p-2 px-3 hover:bg-teal hover:text-white">
      {label}
      <span> →</span>
    </button>
  );
};

export default Button;

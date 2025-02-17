import React from "react";

export const P = ({ children, classe }) => {
  return (
    <span  className={`block text-sm/6 font-medium text-gray-900 ${classe}`}>
      {children}
    </span>
  );
};

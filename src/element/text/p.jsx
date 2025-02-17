import React from "react";

export const P = ({ children, classe }) => {
  return (
    <label  className={`block text-sm/6 font-medium text-gray-900 ${classe}`}>
      {children}
    </label>
  );
};

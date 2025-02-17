import React from "react";

export const ButtonClassic = ({ text, onClick, name, classe, title }) => {
  return (
    <button
      title={title}
      className={` py-2 px-6 border border-white rounded-xl text-white ${
        classe ? classe : "bg-green-500"
      }`}
      name={name}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

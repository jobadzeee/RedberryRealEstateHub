import React from "react";

const Input = (id, type) => {
  return (
    <input
      type={type}
      id={id}
      className="w-[387px] rounded-[6px] p-[10px] h-[42px] border-[#808A93] border-[1px]"
    />
  );
};

export default Input;

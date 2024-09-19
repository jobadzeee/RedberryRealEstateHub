import React from "react";

const TextArea = ({ text, id, register, name, required }) => {
  return (
    <textarea
      className="w-full resize-none	 rounded-[6px] p-[10px] h-[135px] border-[#808A93] border-[1px]"
      id={id}
      {...(register ? register(name, { required: required }) : {})}
    >
      {text}
    </textarea>
  );
};

export default TextArea;

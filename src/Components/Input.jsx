import React from "react";

const Input = ({ id, type, variant, placeholder }) => {
  const styles = {
    primary:
      "w-[387px] rounded-[6px] p-[10px] h-[42px] border-[#808A93] border-[1px]",
    secondary:
      "w-[155px] h-[42px] rounded-[6px] p-[10px]  border-[#808A93] border-[1px] flex justify space-between ",
  };

  return (
    <input
      type={type}
      id={id}
      className={styles[variant]}
      placeholder={placeholder}
    />
  );
};

export default Input;

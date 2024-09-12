import React from "react";

const Button = ({ variant, text, onClick }) => {
  const styles = {
    primary: "bg-[#F93B1D] rounded-[10px] text-white py-[10px] px-4",

    outline:
      "bg-transparent border-[1px] border-[#F93B1D] font-semibold rounded-[10px] text-[#F93B1D] py-[10px] px-4",
  };

  return (
    <button onClick={onClick} className={styles[variant]}>
      {text || "Click Me"}
    </button>
  );
};

export default Button;

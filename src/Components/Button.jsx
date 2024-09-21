import React from "react";

const Button = ({ variant, text, onClick, type }) => {
  const styles = {
    primary:
      "bg-[#F93B1D] transition-all font-firaGo font-medium duration-300 rounded-[10px] font-semibold text-white py-[10px] px-4 hover:bg-[#DF3014]",
    primary_mini:
      "bg-[#F93B1D] transition-all font-firaGo font-medium duration-300 rounded-[8px] font-semibold text-white py-2 px-[14px] hover:bg-[#DF3014]",
    outline:
      "bg-transparent border-[1px] font-firaGo font-medium transition-all duration-300 border-[#F93B1D] font-semibold rounded-[10px] text-[#F93B1D] py-[10px] px-4 hover:bg-[#F93B1D] hover:text-white",
    outline_gray:
      "bg-transparent border-[1px] font-firaGo font-medium transition-all duration-300 border-[#808A93] font-semibold rounded-[10px] text-[#808A93] py-[10px] px-4 hover:bg-[#808A93] hover:text-white",
  };

  return (
    <button onClick={onClick} className={styles[variant]} type={type}>
      {text || "Click Me"}
    </button>
  );
};

export default Button;

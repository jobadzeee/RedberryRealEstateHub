import React from "react";

const ListItem = ({ variant, children, onClick }) => {
  const styles = {
    basic: "flex items-center space-x-1 font-bold relative",
    rounded:
      "rounded-[43px] bg-transparent border-[#DBDBDB] border-[1px] py-[6px] px-[10px] text-[#021526CC] flex gap-2 items-center",
    gray: "flex items-center gap-1 text-lg text-[#808A93] font-firaGo font-normal",
    gray_mini: "flex items-center gap-1 text-[14px] text-[#808A93] font-firaGo font-normal",
  };

  return (
    <li className={styles[variant]} onClick={onClick}>
      {children}
    </li>
  );
};

export default ListItem;

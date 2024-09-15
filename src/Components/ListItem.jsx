import React from "react";

const ListItem = ({ variant, children, onClick }) => {
  const styles = {
    basic: "flex items-center space-x-1 font-bold relative",
    rounded:
      "rounded-[43px] bg-transparent border-[#DBDBDB] border-[1px] py-[6px] px-[10px] text-[#021526CC]",
    gray: "flex items-center gap-1 text-lg text-[#808A93]",
    gray_mini: "flex items-center gap-1 text-[14px] text-[#808A93]",
  };

  return (
    <li className={styles[variant]} onClick={onClick}>
      {children}
    </li>
  );
};

export default ListItem;

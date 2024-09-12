import React from "react";

const ListItem = ({ variant, children }) => {
  const styles = {
    basic: "flex items-center space-x-1 font-bold",
    rounded:
      "rounded-[43px] bg-transparent border-[#DBDBDB] border-[1px] py-[6px] px-[10px] text-[#021526CC]",
  };

  return <li className={styles[variant]}>{children}</li>;
};

export default ListItem;

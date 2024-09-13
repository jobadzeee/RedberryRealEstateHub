import React from "react";

const Label = ({ text, htmlFor, children, variant }) => {
  const styles = {
    semibold: "flex items-center gap-2 text-[14px] font-semibold",
    basic: "flex items-center gap-2 text-[14px]",
  };
  return (
    <label className={styles[variant]} htmlFor={htmlFor}>
      {text} {children}
    </label>
  );
};

export default Label;

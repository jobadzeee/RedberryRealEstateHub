import React from "react";

const Label = ({ text, htmlFor, children, variant, errors, name, value }) => {
  const styles = {
    semibold: "flex items-center gap-2 text-[14px] font-semibold",
    basic: "flex items-center gap-2 text-[14px]",
  };

  const isInvalid = errors && errors[name];
  const isValid = value && !isInvalid;

  const labelClasses = `
    ${styles[variant]}
    ${isInvalid ? "text-red-500" : isValid ? "text-green-500" : "text-gray-600"}
  `;

  return (
    <label className={labelClasses} htmlFor={htmlFor}>
      {text} {children}
    </label>
  );
};

export default Label;

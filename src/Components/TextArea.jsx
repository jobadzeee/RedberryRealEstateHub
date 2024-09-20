import React from "react";

const TextArea = ({
  id,
  type,
  variant,
  placeholder,
  register,
  name,
  required,
  errors,
  validation = {},
  value,
}) => {
  const styles = {
    primary:
      "w-full resize-none	 rounded-[6px] p-[10px] h-[135px] border-[#808A93] border-[1px]",
  };

  const isInvalid = errors && errors[name];

  const inputClasses = `
  ${styles[variant]}
  ${isInvalid && "border-red-500"}
`;

  return (
    <textarea
      type={type}
      id={id}
      className={inputClasses}
      placeholder={placeholder}
      {...(register ? register(name, { required, ...validation }) : { value })}
    />
  );
};

export default TextArea;

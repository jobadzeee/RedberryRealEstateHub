import React from "react";

const Input = ({
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
      "w-[387px] rounded-[6px] p-[10px] h-[42px] border  focus:outline-none  ",
    secondary:
      "w-[155px] h-[42px] rounded-[6px] p-[10px] border flex justify-between focus:outline-none",
  };

  const isInvalid = errors && errors[name];

  const inputClasses = `
  ${styles[variant]}
  ${isInvalid && "border-red-500"}
`;

  return (
    <input
      type={type}
      id={id}
      className={inputClasses}
      placeholder={placeholder}
      {...(register ? register(name, { required, ...validation }) : { value })}
    />
  );
};

export default Input;

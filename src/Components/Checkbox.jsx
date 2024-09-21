import React from "react";
import { ReactComponent as Checked } from "../assets/images/checked.svg";

const Checkbox = ({ isChecked, onChange, type, number }) => {
  return (
    <>
      {type === "checked" && (
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={onChange}
          />
          <span
            className={`w-[20px] h-[20px] rounded-[2px] flex items-center justify-center ${
              isChecked ? "bg-[#45A849]" : "border-[1px] border-[#DBDBDB]"
            }`}
          >
            {isChecked && <Checked />}
          </span>
        </label>
      )}
      
      {type === "rooms" && (
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={onChange}
          />
          <span
            className={`w-[42px] h-[42px] rounded-lg text-[#02152666] flex items-center justify-center ${
              isChecked ? "bg-[#45A849]" : "border-[1px] border-[#DBDBDB]"
            }`}
          >
            {number}
          </span>
        </label>
      )}
      {type === "bedrooms" && (
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={onChange}
          />
          <span
            className={`w-[50px] h-[50px] rounded-lg text-[#02152666] flex items-center justify-center ${
              isChecked ? "bg-gray-200 border-[1px] border-gray-400" : "border-[1px] border-[#DBDBDB]"
            }`}
          >
            {number}
          </span>
        </label>
      )}

    </>
  );
};

export default Checkbox;

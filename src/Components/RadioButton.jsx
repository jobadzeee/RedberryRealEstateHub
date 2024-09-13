import React, { useState } from "react";

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="flex justify-between items-center">
      <label className="inline-flex items-center gap-[7px]">
        <input
          type="radio"
          name="option"
          className="hidden"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={() => setSelectedOption("option1")}
        />
        <span className="w-[17px] h-[17px] border-[1px] border-[#021526] rounded-full flex items-center justify-center">
          {selectedOption === "option1" && (
            <span className="w-[7px] h-[7px] bg-[#021526] rounded-full"></span>
          )}
        </span>
        <span className="text-[14px]">იყიდება</span>
      </label>

      <label className="inline-flex items-center gap-[7px]">
        <input
          type="radio"
          name="option"
          className="hidden"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={() => setSelectedOption("option2")}
        />
        <span className="w-[17px] h-[17px] border-[1px] border-[#021526] rounded-full flex items-center justify-center">
          {selectedOption === "option2" && (
            <span className="w-[7px] h-[7px] bg-[#021526] rounded-full"></span>
          )}
        </span>
        <span className="text-[14px]">ქირავდება</span>
      </label>
    </div>
  );
};

export default RadioButton;

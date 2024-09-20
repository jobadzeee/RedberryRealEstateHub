import React from "react";
import { Controller } from "react-hook-form";

const RadioButton = ({ control, isRequired = false }) => {
  return (
    <div className="space-y-2">
      <Controller
        name="is_rental"
        control={control}
        defaultValue=""
        rules={{
          required: isRequired ? "ეს ველი სავალდებულოა" : false,
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <div className="flex justify-between items-center">
              <label className="inline-flex items-center gap-[7px]">
                <input
                  type="radio"
                  value="0"
                  checked={field.value === "0"}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="hidden"
                />
                <span className="w-[17px] h-[17px] border-[1px] border-[#021526] rounded-full flex items-center justify-center">
                  {field.value === "0" && (
                    <span className="w-[7px] h-[7px] bg-[#021526] rounded-full"></span>
                  )}
                </span>
                <span className="text-[14px]">იყიდება</span>
              </label>

              <label className="inline-flex items-center gap-[7px]">
                <input
                  type="radio"
                  value="1"
                  checked={field.value === "1"}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="hidden"
                />
                <span className="w-[17px] h-[17px] border-[1px] border-[#021526] rounded-full flex items-center justify-center">
                  {field.value === "1" && (
                    <span className="w-[7px] h-[7px] bg-[#021526] rounded-full"></span>
                  )}
                </span>
                <span className="text-[14px]">ქირავდება</span>
              </label>
            </div>
            {error && <p className="text-sm text-red-600">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default RadioButton;

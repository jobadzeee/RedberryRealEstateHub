import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ReactComponent as Check } from "../assets/images/done.svg";
import { ReactComponent as DownArrow } from "../assets/images/downArrow.svg";
import { ReactComponent as UpArrow } from "../assets/images/upArrow.svg";
import { Controller } from "react-hook-form";

const SelectItems = ({ control, name, header, data, rules }) => {
  const getDisplayValue = (value) => {
    if (!value) return "აირჩიე";
    const selectedItem = data.find((item) => item.id === value);
    if (!selectedItem) return "აირჩიე";
    return (
      `${selectedItem.name || ""} ${selectedItem.surname || ""}`.trim() ||
      "აირჩიე"
    );
  };

  return (
    <div className="space-y-[5px]">
      <p className="flex items-center gap-2 text-[14px] font-semibold">
        {header}
      </p>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={rules}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <>
            <Listbox value={value} onChange={(id) => onChange(id)}>
              {({ open }) => (
                <div className="relative mt-1">
                  <Listbox.Button
                    className={`w-[387px] p-[10px] flex justify-between items-center h-[42px] border-[#808A93] border-[1px] ${
                      open
                        ? "rounded-t-[6px] border-b-0 rounded-b-none"
                        : "rounded-[6px]"
                    } ${error ? "border-red-500" : ""}`}
                  >
                    <span className="block truncate">
                      {getDisplayValue(value)}
                    </span>
                    <span className="pointer-events-none inset-y-0 right-0 flex items-center pr-2">
                      {open ? (
                        <UpArrow aria-hidden="true" />
                      ) : (
                        <DownArrow aria-hidden="true" />
                      )}
                    </span>
                  </Listbox.Button>

                  <Transition
                    as={Fragment}
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 top-full mt-0 max-h-[207px] max-w-[387px] border-[1px] border-[#808A93] w-full overflow-auto rounded-b-md bg-white text-base shadow-lg focus:outline-none sm:text-sm">
                      {data.map((item) => (
                        <Listbox.Option
                          key={item.id}
                          className={({ active }) =>
                            `w-[387px] p-[10px] flex justify-between items-center h-[42px] border-[#808A93] border-b-[1px] ${
                              active
                                ? "bg-gray-100 text-black"
                                : "text-gray-900"
                            }`
                          }
                          value={item.id}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {`${item.name || ""} ${
                                  item.surname || ""
                                }`.trim() || "N/A"}
                              </span>
                              {selected ? (
                                <span className="relative inset-y-0 right-2 flex items-center pl-3 text-black">
                                  <Check
                                    aria-hidden="true"
                                    className="w-2 h-2"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              )}
            </Listbox>
            {error && (
              <p className="mt-1 text-sm text-red-600">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default SelectItems;

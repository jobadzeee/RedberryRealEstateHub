import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ReactComponent as Check } from "../assets/images/done.svg";
import { ReactComponent as DownArrow } from "../assets/images/downArrow.svg";
import { ReactComponent as UpArrow } from "../assets/images/upArrow.svg";

const SelectItems = ({ header, data }) => {
  const [selected, setSelected] = useState(data[0]);
  const [active, setActive] = useState(false);

  const handleSelectChange = (item) => {
    setSelected(item);
    setActive(true);
  };

  return (
    <div className="space-y-[5px]">
      <p className="flex items-center gap-2 text-[14px] font-semibold">
        {header}
      </p>
      <Listbox value={selected} onChange={handleSelectChange}>
        {({ open }) => (
          <div className="relative mt-1">
            <Listbox.Button
              className={`w-[387px] p-[10px] flex justify-between items-center h-[42px] border-[#808A93] border-[1px] ${
                open
                  ? "rounded-t-[6px] border-b-0 rounded-b-none"
                  : "rounded-[6px]"
              }`}
            >
              <span className="block truncate">{selected.name}</span>
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
                {data.map((item, id) => (
                  <Listbox.Option
                    key={id}
                    className={({ active }) =>
                      `w-[387px] p-[10px] flex justify-between items-center h-[42px] border-[#808A93] border-b-[1px] ${
                        active ? "bg-gray-100 text-black" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item.name}
                        </span>
                        {selected ? (
                          <span className="relative inset-y-0 right-2 flex items-center pl-3 text-black">
                            <Check aria-hidden="true" className="w-2 h-2" />
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
    </div>
  );
};

export default SelectItems;

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ReactComponent as DownArrow } from "../Images/down.svg";

export const DropdownMenu = ({ mainText, header }) => {
  return (
    <div className="space-y-[5px]">
      <p className="flex items-center gap-2 text-[14px] font-semibold">
        {header}
      </p>
      <Menu>
        <MenuButton className="w-[387px] rounded-[6px] p-[10px] flex justify-between items-center h-[42px] border-[#808A93] border-[1px]">
          {mainText ? (
            <>
              {mainText} <DownArrow />
            </>
          ) : (
            <>
              აირჩიე <DownArrow />
            </>
          )}
        </MenuButton>

        <MenuItems anchor="bottom" className="w-[387px] rounded-b-[6px]">
          <MenuItem className="h-[42px] w-full p-[10px] flex justify-between items-center border-[#808A93] border-[1px] ">
            <a className=" data-[focus]:bg-gray-100/80" href="/settings">
              Settings
            </a>
          </MenuItem>
          <MenuItem className="h-[42px] w-full p-[10px] flex justify-between items-center border-[#808A93] border-[1px]">
            <a className=" data-[focus]:bg-gray-100/80" href="/settings">
              Settings
            </a>
          </MenuItem>
          <MenuItem className="h-[42px] w-full p-[10px] flex justify-between items-center border-[#808A93] border-[1px]">
            <a className=" data-[focus]:bg-gray-100/80" href="/settings">
              Settings
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

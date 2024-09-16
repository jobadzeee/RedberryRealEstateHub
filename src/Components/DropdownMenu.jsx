import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ReactComponent as ArrowSvg } from "../assets/images/downArrow.svg";
import { regions } from "../data/Regions";
import Checkbox from "./Checkbox";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Form from "./Form";

const DropdownMenu = ({ text, type }) => {
  const [checkedRegions, setCheckedRegions] = useState({});

  const handleCheckboxChange = (regionId) => {
    setCheckedRegions((prev) => ({
      ...prev,
      [regionId]: !prev[regionId],
    }));
  };
  return (
    <>
      <>
        {type === "region" && (
          <Menu>
            <MenuButton className="flex items-center gap-1 space-x-1 font-bold relative">
              {text}
              <ArrowSvg />
            </MenuButton>
            <MenuItems
              anchor="bottom"
              className="p-[24px] mt-4 bg-white border-[1px] space-y-[24px] border-[#DBDBDB] rounded-[10px]"
            >
              <span className="text-[16px] font-semibold">
                რეგიონის მიხედვით
              </span>
              <div className="grid grid-cols-3 ">
                {regions.map((region) => (
                  <div className="flex space-x-2 w-[180px]" key={region.id}>
                    <Checkbox
                      type="checked"
                      isChecked={checkedRegions[region.id] || false}
                      onChange={() => handleCheckboxChange(region.id)}
                    />
                    <span className="text-start">{region.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex pt-2 items-center justify-end">
                <Button variant="primary_mini" text="არჩევა" />
              </div>
            </MenuItems>
          </Menu>
        )}
      </>
      <>
        {type === "price" && (
          <Menu>
            <MenuButton className="flex items-center gap-1 space-x-1 font-bold relative">
              {text}
              <ArrowSvg />
            </MenuButton>
            <MenuItems
              anchor="bottom"
              className="p-[24px] mt-4 bg-white border-[1px] space-y-[24px] border-[#DBDBDB] rounded-[10px]"
            >
              <span className="text-[16px] font-semibold">ფასის მიხედვით </span>
              <Form className="space-y-6">
                <div className="flex gap-[15px]">
                  <Input variant="secondary" placeholder="დან" />
                  <Input variant="secondary" placeholder="მდე" />
                </div>
                <div className="flex gap-5">
                  <ul className="space-y-2">
                    <li className="font-bold text-[14px] w-[155px] pb-2">
                      მინ. ფასი
                    </li>
                    <li>10000</li>
                    <li>15000</li>
                    <li>20000</li>
                    <li>25000</li>
                    <li>30000</li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="font-bold text-[14px] w-[155px] pb-2">
                      მაქს. ფასი
                    </li>
                    <li>15000</li>
                    <li>20000</li>
                    <li>25000</li>
                    <li>30000</li>
                    <li>35000</li>
                  </ul>
                </div>
              </Form>
              <div className="flex pt-2 items-center justify-end">
                <Button variant="primary_mini" text="არჩევა" />
              </div>
            </MenuItems>
          </Menu>
        )}
      </>
      <>
        {type === "area" && (
          <Menu>
            <MenuButton className="flex items-center gap-1 space-x-1 font-bold relative">
              {text}
              <ArrowSvg />
            </MenuButton>
            <MenuItems
              anchor="bottom"
              className="p-[24px] mt-4 bg-white border-[1px] space-y-[24px] border-[#DBDBDB] rounded-[10px]"
            >
              <span className="text-[16px] font-semibold">
                ფართობის მიხედვით
              </span>
              <Form className="space-y-6">
                <div className="flex gap-[15px]">
                  <Input variant="secondary" placeholder="დან" />
                  <Input variant="secondary" placeholder="მდე" />
                </div>
                <div className="flex gap-5">
                  <ul className="space-y-2">
                    <li className="font-bold text-[14px] w-[155px] pb-2">
                      მინ. მ²
                    </li>
                    <li>20 მ²</li>
                    <li>30 მ²</li>
                    <li>40 მ²</li>
                    <li>50 მ²</li>
                    <li>60 მ²</li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="font-bold text-[14px] w-[155px] pb-2">
                      მაქს. მ²
                    </li>
                    <li>40 მ²</li>
                    <li>50 მ²</li>
                    <li>60 მ²</li>
                    <li>70 მ²</li>
                    <li>80 მ²</li>
                  </ul>
                </div>
              </Form>
              <div className="flex pt-2 items-center justify-end">
                <Button variant="primary_mini" text="არჩევა" />
              </div>
            </MenuItems>
          </Menu>
        )}
      </>
      <>
        {type === "rooms" && (
          <Menu>
            <MenuButton className="flex items-center gap-1 space-x-1 font-bold relative">
              {text}
              <ArrowSvg />
            </MenuButton>
            <MenuItems
              anchor="bottom"
              className="p-[24px] mt-4 bg-white border-[1px] space-y-[24px] border-[#DBDBDB] rounded-[10px]"
            >
              <span className="text-[16px] font-semibold">
                საძინებლების რაოდენობა
              </span>
              <Form className="grid grid-cols-3 items-center gap-4">
                <Checkbox type="rooms" number={1} />
                <Checkbox type="rooms" number={2} />
                <Checkbox type="rooms" number={3} />
                <Checkbox type="rooms" number={4} />
                <Checkbox type="rooms" number={5} />
                <Checkbox type="rooms" number={6} />
              </Form>
              <div className="flex pt-2 items-center justify-end">
                <Button variant="primary_mini" text="არჩევა" />
              </div>
            </MenuItems>
          </Menu>
        )}
      </>
    </>
  );
};

export default DropdownMenu;

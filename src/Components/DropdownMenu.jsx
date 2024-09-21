import React, { useState, useCallback, useEffect } from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { ReactComponent as ArrowSvg } from "../assets/images/downArrow.svg";
import { GetRegions } from "../queries/GetRegions";
import Checkbox from "./Checkbox";
import Button from "./Button";
import Input from "./Input";
import Form from "./Form";

const DropdownMenu = ({
  text,
  type,
  regionChange,
  priceChange,
  areaChange,
  checkboxChange,
  allReset
}) => {
  const [checkedRegions, setCheckedRegions] = useState({});
  const [checkedState, setCheckedState] = useState(Array(6).fill(false));
  const [inputValue, setInputValue] = useState("");
  const [inputMaxValue, setInputMaxValue] = useState("");
  const [areaMinValue, setAreaMinValue] = useState("");
  const [areaMaxValue, setAreaMaxValue] = useState("");

  const handleCheckRoomsChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const { data: regions, isLoading, isError } = GetRegions();

  const handleCheckboxChange = useCallback((regionId) => {
    setCheckedRegions((prev) => ({
      ...prev,
      [regionId]: !prev[regionId],
    }));
  }, []);

  const checkboxClick = () => {
    checkboxChange(checkedState);
  };

  const handleClick = useCallback(() => {
    const selectedRegions = Object.entries(checkedRegions)
      .filter(([, value]) => value === true)
      .map(([key]) => +key);

    regionChange(selectedRegions);
  }, [checkedRegions, regionChange]);

  const priceClickMax = useCallback((value) => {
    setInputMaxValue(value);
  }, []);

  const priceClick = useCallback((value) => {
    setInputValue(value);
  }, []);

  const areaClickMin = useCallback((value) => {
    setAreaMinValue(value);
  }, []);

  const areaClickMax = useCallback((value) => {
    setAreaMaxValue(value);
  });


  useEffect(() => {
    if (allReset) {
      setCheckedRegions([]);
      setCheckedState(Array(6).fill(false));
      setInputValue(null);
      setInputMaxValue(null);
      setAreaMinValue(null);
      setAreaMaxValue(null);
    }
  }, [allReset]);

  const areaClick = () => {
    const areas = {
      minValue: areaMinValue,
      maxValue: areaMaxValue,
    };
    areaChange(areas);

  };

  const priceSave = () => {
    const prices = {
      minValue: inputValue,
      maxValue: inputMaxValue,
    };
    priceChange(prices);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  return (
    <>
      {type === "region" && (
        <Menu>
          <MenuButton className="flex items-center gap-1 space-x-1 font-bold relative">
            {text}
            <ArrowSvg />
          </MenuButton>
          <MenuItems
            anchor="bottom"
            className="p-[24px] mt-4 bg-white border-[1px] space-y-[24px] border-[#DBDBDB] rounded-[10px] ml-40"
          >
            <span className="text-[16px] font-firaGo font-medium">
              რეგიონის მიხედვით
            </span>
            <div className="grid grid-cols-3 ">
              {regions.map((region) => (
                <div
                  className="flex space-x-2 w-[180px] font-firaGo font-normal"
                  key={region.id}
                >
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
              <Button
                variant="primary_mini"
                text="არჩევა"
                onClick={handleClick}
              />
            </div>
          </MenuItems>
        </Menu>
      )}

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
            <span className="text-[16px] font-firaGo font-medium">
              ფასის მიხედვით{" "}
            </span>
            <Form className="space-y-6">
              <div className="flex gap-[15px]">
                <Input
                  variant="secondary"
                  placeholder="დან"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input
                  variant="secondary"
                  placeholder="მდე"
                  value={inputMaxValue}
                  onChange={(e) => setInputMaxValue(e.target.value)}
                />
              </div>
              <div className="flex gap-5">
                <ul className="space-y-2 font-firaGo font-normal cursor-pointer">
                  <li className="font-bold text-[14px] w-[155px] pb-2">
                    მინ. ფასი
                  </li>
                  {[10000, 15000, 20000, 25000, 30000].map((price) => (
                    <li
                      key={price}
                      onClick={() => priceClick(price.toString())}
                    >
                      {price}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 font-firaGo font-normal cursor-pointer">
                  <li className="font-bold text-[14px] w-[155px] pb-2">
                    მაქს. ფასი
                  </li>
                  {[15000, 20000, 25000, 30000, 35000].map((price) => (
                    <li
                      key={price}
                      onClick={() => priceClickMax(price.toString())}
                    >
                      {price}
                    </li>
                  ))}
                </ul>
              </div>
            </Form>
            <div className="flex pt-2 items-center justify-end">
              <Button
                variant="primary_mini"
                text="არჩევა"
                onClick={priceSave}
              />
            </div>
          </MenuItems>
        </Menu>
      )}

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
            <span className="text-[16px] font-firaGo font-medium ">
              ფართობის მიხედვით
            </span>
            <Form className="space-y-6">
              <div className="flex gap-[15px]">
                <Input
                  variant="secondary"
                  placeholder="დან"
                  value={areaMinValue}
                  onChange={(e) => setAreaMinValue(e.target.value)}
                />
                <Input
                  variant="secondary"
                  placeholder="მდე"
                  value={areaMaxValue}
                  onChange={(e) => setAreaMaxValue(e.target.value)}
                />
              </div>
              <div className="flex gap-5 font-firaGo font-normal">
                <ul className="space-y-2">
                  <li className="font-bold text-[14px] w-[155px] pb-2">
                    მინ. მ²
                  </li>
                  {[20, 30, 40, 50, 60].map((area) => (
                    <li
                      key={area}
                      onClick={() => areaClickMin(area.toString())}
                    >
                      {area} მ²
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  <li className="font-bold text-[14px] w-[155px] pb-2">
                    მაქს. მ²
                  </li>
                  {[40, 50, 60, 70, 80].map((area) => (
                    <li
                      key={area}
                      onClick={() => areaClickMax(area.toString())}
                    >
                      {area} მ²
                    </li>
                  ))}
                </ul>
              </div>
            </Form>
            <div className="flex pt-2 items-center justify-end">
              <Button
                variant="primary_mini"
                text="არჩევა"
                onClick={areaClick}
              />
            </div>
          </MenuItems>
        </Menu>
      )}

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
              {[1, 2, 3, 4, 5, 6].map((number, index) => (
                <Checkbox
                  key={number}
                  type="bedrooms"
                  number={number}
                  isChecked={checkedState[index]}
                  onChange={() => handleCheckRoomsChange(index)}
                />
              ))}
            </Form>
            <div className="flex pt-2 items-center justify-end">
              <Button
                variant="primary_mini"
                text="არჩევა"
                onClick={checkboxClick}
              />
            </div>
          </MenuItems>
        </Menu>
      )}
    </>
  );
};

export default DropdownMenu;

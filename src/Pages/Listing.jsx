import React from "react";
import { ReactComponent as Done } from "../assets/images/done.svg";
import { ReactComponent as Plus } from "../assets/images/plus-circle.svg";
import { PostEstates } from "../Api/PostEstates";
import { GetCities } from "../Api/GetCities";
import { GetRegions } from "../Api/GetRegions";
import { GetAgents } from "../Api/GetAgents";
import Form from "../components/Form";
import Input from "../components/Input";
import Label from "../components/Label";
import RadioButton from "../components/RadioButton";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import SelectItem from "../components/SelectItems";

const Listing = () => {
  const { mutate } = PostEstates();
  const {
    data: regions,
    isLoading: regionsLoading,
    isError: regionsError,
  } = GetRegions();
  const {
    data: cities,
    isLoading: citiesLoading,
    isError: citiesError,
  } = GetCities();
  const {
    data: agents,
    isLoading: agentsLoading,
    isError: agentsError,
  } = GetAgents();

  const handleClick = () => {
    mutate();
  };

  if (regionsLoading || citiesLoading || agentsLoading)
    return <p>Loading...</p>;
  if (regionsError || citiesError || agentsError)
    return <p>Error fetching data</p>;

  console.log(regions);

  return (
    <div className="mx-auto max-w-[790px]">
      <h1 className="text-[32px] text-center py-16">ლისტინგის დამატება</h1>
      <Form className="space-y-[80px] pb-[90px]">
        <div className="space-y-2 w-[266px]">
          <p className="text-[16px] font-semibold">გარიგების ტიპი</p>
          <RadioButton />
        </div>
        <div className="space-y-5">
          <p className="text-[16px] font-semibold">მდებარეობა</p>
          <div className="flex gap-5">
            <div className="space-y-[5px]">
              <Label text="მისამართი *" htmlFor="address" variant="semibold" />
              <Input type="text" variant="primary" id="address" />
              <Label htmlFor="address" variant="basic">
                <Done /> მინიმუმ 2 სიმბოლო
              </Label>
            </div>
            <div className="space-y-[5px]">
              <Label
                text=" საფოსტო ინდექსი *"
                htmlFor="zipCode"
                variant="semibold"
              />
              <Input type="number" variant="primary" id="zipCode" />
              <Label htmlFor="zipCode" variant="basic">
                <Done /> მხოლოდ რიცხვები
              </Label>
            </div>
          </div>
          <div className="flex gap-5">
            <SelectItem header="რეგიონი" data={regions} />
            <SelectItem header="ქალაქი" data={cities} />
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-[16px] font-semibold">ბინის დეტალები</p>
          <div className="flex gap-5">
            <div className="space-y-[5px]">
              <Label text="ფასი" htmlFor="price" variant="semibold" />
              <Input type="number" variant="primary" id="price" />
              <Label htmlFor="price" variant="primary" variant="basic">
                <Done /> მხოლოდ რიცხვები
              </Label>
            </div>
            <div className="space-y-[5px]">
              <Label text="ფართობი" htmlFor="area" variant="semibold" />
              <Input type="number" variant="primary" id="area" />
              <Label htmlFor="area" variant="basic">
                <Done /> მხოლოდ რიცხვები
              </Label>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="space-y-[5px]">
              <Label
                text="საძინებლების რაოდენობა*"
                htmlFor="rooms"
                variant="semibold"
              />
              <Input type="number" variant="primary" id="rooms" />
              <Label htmlFor="rooms" variant="basic">
                <Done /> მხოლოდ რიცხვები
              </Label>
            </div>
          </div>

          <div className="space-y-[5px]">
            <Label text="აღწერა" htmlFor="textarea" variant="semibold" />
            <TextArea id="textarea" />
            <Label htmlFor="textarea" variant="basic">
              <Done /> მინიმუმ 5 სიტყვა
            </Label>
          </div>
          <div className="space-y-[5px]">
            <Label
              text="ატვირთეთ ფოტო *"
              htmlFor="file-upload"
              variant="semibold"
            />
            <input type="file" id="file-upload" className="hidden" />
            <label
              htmlFor="file-upload"
              className="w-full flex justify-center items-center rounded-[6px] p-[10px] h-[135px] border-[#808A93] border-[1px]"
            >
              <Plus />
            </label>
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-[16px] font-semibold">აგენტი</p>
          <div className="space-y-[5px]">
            <SelectItem data={agents} />
          </div>
        </div>
      </Form>
      <div className="space-x-4 w-full flex justify-end pb-20">
        <Button variant="outline" text="გაუქმება" />
        <Button
          variant="primary"
          text="დაამატე ლისტინგი"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Listing;

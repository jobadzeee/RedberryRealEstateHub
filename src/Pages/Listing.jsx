import React from "react";
import { ReactComponent as Done } from "../assets/images/done.svg";
import Form from "../components/Form";
import Input from "../components/Input";
import Label from "../components/Label";
import RadioButton from "../components/RadioButton";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import SelectItem from "../components/SelectItems";
import { regions } from "../data/Regions";
import { cities } from "../data/Cities";
import { agents } from "../data/Agents";

const Listing = () => {
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
                htmlFor="area"
                variant="semibold"
              />
              <Input type="number" variant="primary" id="area" />
              <Label htmlFor="area" variant="basic">
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
              htmlFor="textarea"
              variant="semibold"
            />
            <TextArea id="textarea" />
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
        <Button variant="primary" text="დაამატე ლისტინგი" />
      </div>
    </div>
  );
};

export default Listing;

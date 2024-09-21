import React from "react";
import { ReactComponent as Done } from "../assets/images/done.svg";
import  DropdownMenu  from "../Components/DropdownMenu";
import Form from "../Components/Form";
import Input from "../Components/Input";
import Label from "../Components/Label";
import RadioButton from "../Components/RadioButton";
import TextArea from "../Components/TextArea";

const Listing = () => {
  return (
    <div className="mx-auto max-w-[790px]">
      <h1 className="text-[32px] text-center py-16">ლისტინგის დამატება</h1>
      <Form className="space-y-[80px]">
        <div className="space-y-2 w-[266px]">
          <p className="text-[16px] font-semibold">გარიგების ტიპი</p>
          <RadioButton />
        </div>
        <div className="space-y-5">
          <p className="text-[16px] font-semibold">მდებარეობა</p>
          <div className="flex gap-5">
            <div className="space-y-[5px]">
              <Label text="მისამართი *" htmlFor="address" variant="semibold" />
              <Input type="text" id="address" />
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
              <Input type="number" id="zipCode" />
              <Label htmlFor="zipCode" variant="basic">
                <Done /> მხოლოდ რიცხვები
              </Label>
            </div>
          </div>
          <div className="flex gap-5">
            <DropdownMenu header="რეგიონი" mainText="კახეთი" />
            <DropdownMenu header="ქალაქი" mainText="გურჯაანი" />
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-[16px] font-semibold">ბინის დეტალები</p>
          <div className="flex gap-5">
            <div className="space-y-[5px]">
              <Label text="ფასი" htmlFor="price" variant="semibold" />
              <Input type="number" id="price" />
              <Label htmlFor="price" variant="basic">
                <Done /> მხოლოდ რიცხვები
              </Label>
            </div>
            <div className="space-y-[5px]">
              <Label text="ფართობი" htmlFor="area" variant="semibold" />
              <Input type="number" id="area" />
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
              <Input type="number" id="area" />
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
            <DropdownMenu header="აირჩიე" mainText="გაგა გაგაძე" />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Listing;

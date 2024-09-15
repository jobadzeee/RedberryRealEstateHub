import React from "react";
import Form from "./Form";
import Label from "./Label";
import Input from "./Input";
import TextArea from "./TextArea";
import { ReactComponent as Done } from "../assets/images/done.svg";
import Button from "./Button";

const AgentUpload = ({ closeModal, add }) => {
  return (
    <>
      <h2 className="text-[32px] text-center font-bold">აგენტის დამატება</h2>
      <Form className="space-y-7 flex flex-col pt-16 py-24 ">
        <div className="flex gap-5">
          <div className="space-y-[5px] flex flex-col">
            <Label htmlFor="name" variant="semibold" text="სახელი *" />
            <Input type="text" id="name" />
            <Label htmlFor="name" variant="basic">
              <Done /> მინიმუმ ორი სიმბოლო
            </Label>
          </div>
          <div className="space-y-[5px] flex flex-col">
            <Label htmlFor="surname" variant="semibold" text="გვარი" />
            <Input type="text" id="surname" />
            <Label htmlFor="surname" variant="basic">
              <Done /> მინიმუმ ორი სიმბოლო
            </Label>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="space-y-[5px] flex flex-col">
            <Label htmlFor="email" variant="semibold" text="ელ-ფოსტა *" />
            <Input type="email" id="name" />
            <Label htmlFor="email" variant="basic">
              <Done /> გამოიყენეთ @redberry.ge ფოსტა
            </Label>
          </div>
          <div className="space-y-[5px] flex flex-col">
            <Label
              htmlFor="number"
              variant="semibold"
              text="ტელეფონის ნომერი"
            />
            <Input type="number" id="number" />
            <Label htmlFor="number" variant="basic">
              <Done /> მხოლოდ რიცხვები
            </Label>
          </div>
        </div>
        <div className="space-y-[5px]">
          <Label text="ატვირთეთ ფოტო" variant="semibold" />
          <TextArea />
        </div>
      </Form>

      <div className="space-x-4 w-full flex justify-end">
        <Button variant="outline" onClick={closeModal} text="გაუქმება" />
        <Button variant="primary" onClick={add} text="დაამატე ლისტინგი" />
      </div>
    </>
  );
};

export default AgentUpload;

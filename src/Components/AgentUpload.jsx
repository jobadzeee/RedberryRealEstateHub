import React from "react";
import Form from "./Form";
import Label from "./Label";
import Input from "./Input";
import ImageUploader from "./ImageUploader";
import { ReactComponent as Done } from "../assets/images/done.svg";
import { PostAgent } from "../queries/PostAgent";
import Button from "./Button";
import { useForm } from "react-hook-form";

const AgentUpload = ({ closeModal }) => {
  const { mutate } = PostAgent();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      mutate(formData);
      console.log("Listing submitted successfully");
      closeModal();
    } catch (error) {
      console.error("Error submitting listing:", error);
    }
  };

  return (
    <>
      <h2 className="text-[32px] text-center font-bold">აგენტის დამატება</h2>
      <Form
        className="space-y-7 flex flex-col pt-16 py-24 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-5">
          <div className="space-y-[5px] flex flex-col">
            <Label htmlFor="name" variant="semibold" text="სახელი *" />
            <Input
              type="text"
              variant="primary"
              id="name"
              register={register}
              name="name"
              required={true}
            />
            <Label htmlFor="name" variant="basic">
              <Done /> მინიმუმ ორი სიმბოლო
            </Label>
          </div>
          <div className="space-y-[5px] flex flex-col">
            <Label htmlFor="surname" variant="semibold" text="გვარი" />
            <Input
              type="text"
              variant="primary"
              id="surname"
              register={register}
              name="surname"
              required={true}
            />
            <Label htmlFor="surname" variant="basic">
              <Done /> მინიმუმ ორი სიმბოლო
            </Label>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="space-y-[5px] flex flex-col">
            <Label htmlFor="email" variant="semibold" text="ელ-ფოსტა *" />
            <Input
              type="email"
              variant="primary"
              id="email"
              register={register}
              name="email"
              required={true}
            />
            <Label htmlFor="email" variant="basic">
              <Done /> გამოიყენეთ @redberry.ge ფოსტა
            </Label>
          </div>
          <div className="space-y-[5px] flex flex-col">
            <Label htmlFor="phone" variant="semibold" text="ტელეფონის ნომერი" />
            <Input
              type="number"
              variant="primary"
              id="phone"
              register={register}
              name="phone"
              required={true}
            />
            <Label htmlFor="phone" variant="basic">
              <Done /> მხოლოდ რიცხვები
            </Label>
          </div>
        </div>
        <div className="space-y-[5px]">
          <Label text="ატვირთეთ ფოტო" variant="semibold" />
          <ImageUploader control={control} errors={errors} name="avatar" />
        </div>
        <div className="space-x-4 w-full flex justify-end">
          <Button variant="outline" onClick={closeModal} text="გაუქმება" />
          <Button variant="primary" type="submit" text="დაამატე ლისტინგი" />
        </div>
      </Form>
    </>
  );
};

export default AgentUpload;

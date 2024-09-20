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
    watch,
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

  const nameValue = watch("name");
  const surnameValue = watch("surname");
  const emailValue = watch("email");
  const phoneValue = watch("phone");

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
              required="required"
              errors={errors}
              validation={{
                minLength: {
                  value: 2,
                },
                maxLength: {
                  value: 14,
                },
                pattern: {
                  value: /^[ა-ჰ,.]+$/,
                },
              }}
            />
            <Label
              htmlFor="name"
              variant="basic"
              value={nameValue}
              errors={errors}
              name="name"
            >
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
              required="required"
              errors={errors}
              validation={{
                minLength: {
                  value: 2,
                },
                maxLength: {
                  value: 14,
                },
                pattern: {
                  value: /^[ა-ჰ,.]+$/,
                },
              }}
            />
            <Label
              htmlFor="surname"
              variant="basic"
              value={surnameValue}
              errors={errors}
              name="surname"
            >
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
              errors={errors}
              name="email"
              validation={{
                validate: (value) => {
                  return value.endsWith("@redberry.ge");
                },
              }}
            />
            <Label
              htmlFor="email"
              variant="basic"
              value={emailValue}
              name="email"
              errors={errors}
            >
              <Done /> გამოიყენეთ @redberry.ge ფოსტა
            </Label>
          </div>
          <div className="space-y-[5px] flex flex-col">
            <Label htmlFor="phone" variant="semibold" text="ტელეფონის ნომერი" />
            <Input
              type="number"
              variant="primary"
              id="phone"
              errors={errors}
              register={register}
              name="phone"
              required="required"
              validation={{
                validate: (value) => {
                  const isValidPhone =
                    /^\d{9}$/.test(value) && value.startsWith("5");
                  return (
                    isValidPhone || "Number must be 9 digits and start with 5."
                  );
                },
              }}
            />
            <Label
              htmlFor="phone"
              variant="basic"
              value={phoneValue}
              errors={errors}
              name="phone"
            >
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

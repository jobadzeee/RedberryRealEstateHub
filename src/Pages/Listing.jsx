import React from "react";
import { ReactComponent as Done } from "../assets/images/done.svg";
import { PostEstates } from "../queries/PostEstates";
import { GetCities } from "../queries/GetCities";
import { GetRegions } from "../queries/GetRegions";
import { GetAgents } from "../queries/GetAgents";
import Form from "../components/Form";
import Input from "../components/Input";
import Label from "../components/Label";
import RadioButton from "../components/RadioButton";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import SelectItem from "../components/SelectItems";
import Loader from "../components/Loader";
import { useForm } from "react-hook-form";
import ImageUploader from "../components/ImageUploader";
import { useNavigate } from "react-router-dom";

const Listing = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    navigate("/");
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      mutate(formData);
      console.log("Listing submitted successfully");
    } catch (error) {
      console.error("Error submitting listing:", error);
    }
  };

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

  if (regionsLoading || citiesLoading || agentsLoading) return <Loader />;
  if (regionsError || citiesError || agentsError) return <Loader />;

  return (
    <div className="mx-auto max-w-[790px]">
      <h1 className="text-[32px] text-center py-16">ლისტინგის დამატება</h1>
      <Form
        className="space-y-[80px] pb-[90px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2 w-[266px]">
          <p className="text-[16px] font-semibold">გარიგების ტიპი</p>
          <RadioButton control={control} />
        </div>
        <div className="space-y-5">
          <p className="text-[16px] font-semibold">მდებარეობა</p>
          <div className="flex gap-5">
            <div className="space-y-[5px]">
              <Label text="მისამართი *" htmlFor="address" variant="semibold" />
              <Input
                type="text"
                variant="primary"
                id="address"
                register={register}
                name="address"
                required={true}
              />
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
              <Input
                type="number"
                variant="primary"
                id="zipCode"
                register={register}
                name="zip_code"
                required={true}
              />
              <Label htmlFor="zipCode" variant="basic">
                <Done /> მხოლოდ რიცხვები
              </Label>
            </div>
          </div>
          <div className="flex gap-5">
            <SelectItem
              header="რეგიონი"
              data={regions}
              control={control}
              name="region_id"
            />
            <SelectItem
              header="ქალაქი"
              control={control}
              name="city_id"
              data={cities}
            />
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-[16px] font-semibold">ბინის დეტალები</p>
          <div className="flex gap-5">
            <div className="space-y-[5px]">
              <Label text="ფასი" htmlFor="price" variant="semibold" />
              <Input
                type="number"
                variant="primary"
                id="price"
                register={register}
                name="price"
                required={true}
              />
              <Label htmlFor="price" variant="basic">
                <Done /> მხოლოდ რიცხვები
              </Label>
            </div>
            <div className="space-y-[5px]">
              <Label text="ფართობი" htmlFor="area" variant="semibold" />
              <Input
                type="number"
                variant="primary"
                id="area"
                register={register}
                name="area"
                required={true}
              />
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
              <Input
                type="number"
                variant="primary"
                id="rooms"
                register={register}
                name="bedrooms"
                required={true}
              />
              <Label htmlFor="rooms" variant="basic">
                <Done /> მხოლოდ რიცხვები
              </Label>
            </div>
          </div>

          <div className="space-y-[5px]">
            <Label text="აღწერა" htmlFor="description" variant="semibold" />
            <TextArea
              id="description"
              register={register}
              name="description"
              required={true}
            />
            <Label htmlFor="description" variant="basic">
              <Done /> მინიმუმ 5 სიტყვა
            </Label>
          </div>
          <div className="space-y-[5px]">
            <Label
              text="ატვირთეთ ფოტო *"
              htmlFor="file-upload"
              variant="semibold"
            />
            <ImageUploader control={control} errors={errors} name="image" />
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-[16px] font-semibold">აგენტი</p>
          <div className="space-y-[5px]">
            <SelectItem
              data={agents}
              control={control}
              name="agent_id"
              header="აგენტი"
            />
          </div>
        </div>
        <div className="space-x-4 w-full flex justify-end pb-20">
          <Button variant="outline" text="გაუქმება" />
          <Button type="submit" variant="primary" text="დაამატე ლისტინგი" />
        </div>
      </Form>
    </div>
  );
};

export default Listing;

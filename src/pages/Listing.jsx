import React, { useState, useEffect } from "react";
import { ReactComponent as Done } from "../assets/images/done.svg";
import { PostEstates } from "../queries/PostEstates";
import { GetCities } from "../queries/GetCities";
import { GetRegions } from "../queries/GetRegions";
import { GetAgents } from "../queries/GetAgents";
import Form from "../Components/Form";
import Input from "../Components/Input";
import Label from "../Components/Label";
import RadioButton from "../Components/RadioButton";
import TextArea from "../Components/TextArea";
import Button from "../Components/Button";
import SelectItem from "../Components/SelectItems";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/Error";
import { useForm } from "react-hook-form";
import ImageUploader from "../Components/ImageUploader";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "listingFormData";

const Listing = () => {
  const navigate = useNavigate();
  const [setSelectedRegion] = useState(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    navigate("/");
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      mutate(formData);

      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Error submitting listing:", error);
    }
  };

  const watchRegion = watch("region_id");

  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

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
  if (regionsError || citiesError || agentsError) return <ErrorMessage />;

  const filteredCities = cities
    ? cities.filter((city) => city.region_id === parseInt(watchRegion))
    : [];

  const addressValue = watch("address");
  const zipValue = watch("zip_code");
  const priceValue = watch("price");
  const areaValue = watch("area");
  const bedroomsValue = watch("bedrooms");
  const descriptionValue = watch("description");

  return (
    <div className="mx-auto max-w-[790px]">
      <h1 className="text-[32px] text-center py-16">ლისტინგის დამატება</h1>
      <Form
        className="space-y-[80px] pb-[90px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2 w-[266px]">
          <p className="text-[16px] font-semibold">გარიგების ტიპი</p>
          <RadioButton control={control} isRequired={true} />
        </div>
        <div className="space-y-5">
          <p className="text-[16px] font-semibold">მდებარეობა</p>
          <div className="flex gap-5">
            <div className="space-y-[5px]">
              <Label
                text="მისამართი *"
                htmlFor="address"
                variant="semibold"
                name="address"
              />
              <Input
                type="text"
                variant="primary"
                id="address"
                register={register}
                name="address"
                required="required"
                errors={errors}
                validation={{
                  minLength: {
                    value: 2,
                  },
                  maxLength: {
                    value: 30,
                  },
                }}
              />
              <Label
                htmlFor="address"
                variant="basic"
                errors={errors}
                name="address"
                value={addressValue}
              >
                <Done /> მინიმუმ 2 სიმბოლო
              </Label>
            </div>
            <div className="space-y-[5px]">
              <Label
                text=" საფოსტო ინდექსი *"
                htmlFor="zip_code"
                variant="semibold"
              />
              <Input
                type="number"
                variant="primary"
                id="zip_code"
                register={register}
                name="zip_code"
                required="required"
                errors={errors}
                validation={{
                  pattern: {
                    value: /[0-9]/,
                  },
                  maxLength: {
                    value: 4,
                  },
                  minLength: {
                    value: 4,
                  },
                }}
              />
              <Label
                htmlFor="zip_code"
                variant="basic"
                errors={errors}
                name="zip_code"
                value={zipValue}
              >
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
              onChange={(value) => setSelectedRegion(value)}
              rules={{ required: "ეს ველი სავალდებულოა" }}
            />
            {watchRegion && (
              <SelectItem
                header="ქალაქი"
                control={control}
                name="city_id"
                rules={{ required: "ეს ველი სავალდებულოა" }}
                data={filteredCities}
              />
            )}
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
                required="required"
                errors={errors}
                validation={{
                  valueAsNumber: true,
                  required: "Price is required",
                  validate: {
                    positive: (value) => value > 0,
                    isNumber: (value) => !isNaN(value),
                  },
                }}
              />
              <Label
                htmlFor="price"
                variant="basic"
                errors={errors}
                name="price"
                value={priceValue}
              >
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
                errors={errors}
                required="required"
                validation={{
                  valueAsNumber: true,
                  required: "Price is required",
                  validate: {
                    positive: (value) =>
                      value > 0 || "Price must be greater than 0",
                    isNumber: (value) => !isNaN(value) || "Must be a number",
                  },
                }}
              />
              <Label
                htmlFor="area"
                variant="basic"
                errors={errors}
                name="area"
                value={areaValue}
              >
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
                errors={errors}
                required="required"
                validation={{
                  valueAsNumber: true,
                  required: "Price is required",
                  validate: {
                    positive: (value) => value > 0,
                    negative: (value) => value < 20,
                  },
                }}
              />
              <Label
                htmlFor="rooms"
                variant="basic"
                errors={errors}
                name="bedrooms"
                value={bedroomsValue}
              >
                <Done /> მხოლოდ რიცხვები
              </Label>
            </div>
          </div>

          <div className="space-y-[5px]">
            <Label text="აღწერა" htmlFor="description" variant="semibold" />
            <TextArea
              id="description"
              variant="primary"
              register={register}
              name="description"
              errors={errors}
              required="required"
              validation={{
                validate: (value) => {
                  const words = value.trim().split(/\s+/);
                  return words.length >= 5;
                },
              }}
            />
            <Label
              htmlFor="description"
              variant="basic"
              errors={errors}
              name="description"
              value={descriptionValue}
            >
              <Done /> მინიმუმ 5 სიტყვა
            </Label>
          </div>
          <div className="space-y-[5px]">
            <Label text="ატვირთეთ ფოტო *" variant="semibold" />
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
              rules={{ required: "ეს ველი სავალდებულოა" }}
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

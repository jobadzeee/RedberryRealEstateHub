import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ShortDate from "../components/ShortDateConverter";
import ListItem from "../components/ListItem";
import { ReactComponent as Location } from "../assets/images/location-marker.svg";
import { ReactComponent as Area } from "../assets/images/space.svg";
import { ReactComponent as Bed } from "../assets/images/bed.svg";
import { ReactComponent as ZipCode } from "../assets/images/Locate.svg";
import { ReactComponent as Gmail } from "../assets/images/Gmail.svg";
import { ReactComponent as Phone } from "../assets/images/Phone.svg";
import { ReactComponent as Back } from "../assets/images/BackArrow.svg";
import { ReactComponent as Delete } from "../assets/images/Delete.svg";
import { GetDetails } from "../queries/GetPropertyDetails";
import Button from "../components/Button";
import Modal from "./Modal";
import { DeleteDetails } from "../queries/DeleteProperty";
import Loader from "./Loader";
import SwiperComponent from "../components/Swiper";

const MappedItems = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { mutate: deleteProperty } = DeleteDetails();

  const {
    data: property,
    isLoading: propertyLoading,
    isError: propertyError,
  } = GetDetails(id);

  if (propertyLoading) return <Loader />;
  if (propertyError || !property) return <Loader />;
  const regionId = property.city.region.id;

  const handleDelete = () => {
    deleteProperty(id);
    navigate("/");
  };

  return (
    <>
      <a href="/">
        <Back />
      </a>
      <div className="flex gap-[70px] pt-[35px]">
        <div className="h-[670px] w-[840px] text-right space-y-3">
          <img
            src={property.image}
            alt={`Property ${property.id}`}
            className="rounded-b-none w-full h-[670px] rounded-[14px]"
          />
          <span className="w-full text-[#808A93] font-firaGo font-normal">
            გამოქვეყნების თარიღი{" "}
            <ShortDate className="text-[#808A93]" date={property.created_at} />
          </span>
        </div>
        <div className="max-w-[500px] w-full">
          <div className="space-y-6">
            <span className="text-[48px] font-firaGo  font-bold">{property.price} ₾</span>
            <ul className="space-y-4">
              <ListItem variant="gray">
                <Location /> {property.city.name}, {property.address}
              </ListItem>
              <ListItem variant="gray">
                <Area /> ფართი {property.area} მ²
              </ListItem>
              <ListItem variant="gray">
                <Bed /> საძინებელი {property.bedrooms}
              </ListItem>
              <ListItem variant="gray">
                <ZipCode className="ml-[2px]" /> საფოსტო ინდექსი{" "}
                {property.zip_code}
              </ListItem>
            </ul>
          </div>
          <div className="mt-10 space-y-[50px]">
            <p className="max-h-[78px] h-full font-firaGo font-normal overflow-scroll text-lg text-[#808A93]">
              {property.description}
            </p>
            <div className="w-full h-[175px] border-[1px] border-[#DBDBDB] rounded-lg ">
              <div className="px-5 pt-6 space-y-4">
                <div className="flex items-center gap-[14px]">
                  <div className="w-[72px] h-[72px] rounded-[100%] overflow-hidden ">
                    <img
                      src={property.agent.avatar}
                      alt="Agent Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[16px] font-firaGo font-normal">
                      {property.agent?.name} {property.agent?.surname}
                    </span>
                    <span className="text-[14px] text-[#676E76] font-firaGo font-normal">აგენტი</span>
                  </div>
                </div>
                <ul>
                  <ListItem variant="gray_mini">
                    <Gmail />{" "}
                    {property.agent?.email
                      ? property.agent?.email
                      : "No Gmail available"}
                  </ListItem>
                  <ListItem variant="gray_mini">
                    <Phone />
                    {property.agent?.phone
                      ? property.agent?.phone
                      : "No Phone available"}
                  </ListItem>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-[30px]">
            <Button
              variant="outline_gray"
              onClick={() => setIsOpen(true)}
              text="ლისტინგის წაშლა"
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        className="rounded-[10px] bg-white px-[170px] py-[58px] relative"
        variant="blur"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-[17.96px] right-[17.96px]"
        >
          <Delete className="w-5 h-5 " />
        </button>
        <div className="space-y-9">
          <p className="text-[20px] text-black"> გსურთ წაშალოთ ლისტინგი?</p>
          <div className="space-x-[15px]">
            <Button
              variant="outline"
              text="გაუქმება"
              onClick={() => setIsOpen(false)}
            />
            <Button
              variant="primary"
              text="დადასტურება"
              onClick={handleDelete}
            />
          </div>
        </div>
      </Modal>
      <SwiperComponent regionId={regionId} />
    </>
  );
};

export default MappedItems;
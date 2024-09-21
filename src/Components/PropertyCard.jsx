import React from "react";
import { ReactComponent as LocationSvg } from "../assets/images/location-marker.svg";
import { ReactComponent as Bed } from "../assets/images/bed.svg";
import { ReactComponent as Space } from "../assets/images/space.svg";
import { ReactComponent as Locate } from "../assets/images/Locate.svg";

const PropertyCard = ({ property }) => {
  return (
    <div
      className="transition-shadow duration-500 w-[384px] flex flex-col justify-center relative border-[1px] border-t-0 border-[#DBDBDB]
  rounded-[14px] hover:shadow-custom"
    >
      <img
        src={property.image}
        alt={`Property ${property.id}`}
        className="h-[307px] w-[384px] rounded-b-none  rounded-[14px]"
      />
      <div className="absolute text-white text-[12px] font-firaGo font-medium text-center rounded-[15px] bg-[#02152680] w-[90px] p-[6px] left-[23px] top-[23px]">
        {property.is_rental === 0 ? "იყიდება" : "ქირავდება"}
      </div>
      <div className="px-[25px] py-[22px] space-y-5">
        <div>
          <p className="font-bold font-firaGo text-[28px]">{property.price.toLocaleString()} ₾</p>
          <div className="flex items-center">
            <LocationSvg />
            <p className="text-[#021526B2] font-firaGo font-normal text-lg">
              {property.city.name}, {property.address}
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center gap-1">
            <Bed />
            <p className="text-[#021526B2] font-firaGo font-normal text-lg">{property.bedrooms}</p>
          </div>
          <div className="flex items-center font-firaGo font-normal gap-1">
            <Space />
            <p className="text-[#021526B2] font-firaGo font-normal text-lg">{property.area} მ²</p>
          </div>
          <div className="flex items-center gap-1">
            <Locate />
            <p className="text-[#021526B2] font-firaGo font-normal text-lg">{property.zip_code}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

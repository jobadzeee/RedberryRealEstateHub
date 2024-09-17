import React from "react";
import { GetEstates } from "../Api/GetEstates";
import { ReactComponent as LocationSvg } from "../assets/images/location-marker.svg";
import { ReactComponent as Bed } from "../assets/images/bed.svg";
import { ReactComponent as Space } from "../assets/images/space.svg";
import { ReactComponent as Locate } from "../assets/images/Locate.svg";

const PropertyMap = () => {
  const { data, isLoading, isError } = GetEstates();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  console.log(data);

  return (
    <div className="grid grid-cols-4 gap-5 pt-8 w-fulls m-auto place-items-center	">
      {data.map((property) => (
        <a key={property.id} href={`/PropertyDetails/${property.id}`}>
          <div
            className="transition-shadow duration-500 h-[455px] w-[384px] flex flex-col justify-center relative border-[1px] border-t-0 border-[#DBDBDB]
          rounded-[14px] hover:shadow-custom"
          >
            <img
              src={property.image}
              alt={`Property ${property.id}`}
              className="h-[307px] w-full rounded-b-none  rounded-[14px]"
            />
            <div className="absolute text-white text-[12px] font-semibold text-center rounded-[15px] bg-[#02152680] w-[90px] p-[6px] left-[23px] top-[23px]">
              {property.is_rental === 0 ? "იყიდება" : "ქირავდება"}
            </div>
            <div className="px-[25px] py-[22px] space-y-5">
              <div>
                <p className="font-bold text-2xl">{property.price} ₾</p>
                <div className="flex items-center">
                  <LocationSvg />
                  <p className="text-[#021526B2] text-lg">
                    {property.city.name}, {property.address}
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex items-center gap-1">
                  <Bed />
                  <p className="text-[#021526B2] text-lg">
                    {property.bedrooms}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Space />
                  <p className="text-[#021526B2] text-lg">{property.area} მ²</p>
                </div>
                <div className="flex items-center gap-1">
                  <Locate />
                  <p className="text-[#021526B2] text-lg">
                    {property.zip_code}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default PropertyMap;

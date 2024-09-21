import React from "react";
import { GetEstates } from "../queries/GetEstates";
import Loader from "./Loader";
import PropertyCard from "./PropertyCard";

const PropertyMap = ({ region, price, area, bedrooms}) => {
  let { data, isLoading, isError } = GetEstates();

  if (isLoading || isError) return <Loader />;

  let filteredData = data;

  if (region && region.length > 0) {
    filteredData = filteredData.filter(property => 
      region.includes(property.city.region_id)
    );
  }

  if (price && (price.minValue || price.maxValue)) {
    filteredData = filteredData.filter(property => {
      const propertyPrice = property.price;
      const meetsMinPrice = price.minValue ? propertyPrice >= price.minValue : true;
      const meetsMaxPrice = price.maxValue ? propertyPrice <= price.maxValue : true;
      return meetsMinPrice && meetsMaxPrice;
    });
  }

  if (area && (area.minValue || area.maxValue)) {
    filteredData = filteredData.filter(property => {
      const propertyArea = property.area;
      const meetsMinArea = area.minValue ? propertyArea >= area.minValue : true;
      const meetsMaxArea = area.maxValue ? propertyArea <= area.maxValue : true;
      return meetsMinArea && meetsMaxArea;
    });
  }

  if (bedrooms && bedrooms.some(value => value)) {
    filteredData = filteredData.filter(property => {
      const propertyBedrooms = property.bedrooms;
      return bedrooms[propertyBedrooms - 1] === true;
    });
  }

  console.log("Filtered Data:", filteredData);

  if (filteredData.length === 0) {
    return <p className="font-firaGo text-[20px] pt-8 text-[#021526CC]">აღნიშნული მონაცემებით განცხადება არ იძებნება</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-5 pt-8 w-full m-auto place-items-center">
      {filteredData.map((property) => (
        <a key={property.id} href={`/PropertyDetails/${property.id}`}>
          <PropertyCard property={property} />
        </a>
      ))}
    </div>
  );
};

export default PropertyMap;
import React from "react";
import { GetEstates } from "../queries/GetEstates";
import Loader from "./Loader";
import PropertyCard from "./PropertyCard";

const PropertyMap = () => {
  const { data, isLoading, isError } = GetEstates();

  if (isLoading) return <Loader />;
  if (isError) return <Loader />;

  console.log(data);

  return (
    <div className="grid grid-cols-4 gap-5 pt-8 w-full m-auto place-items-center	">
      {data.map((property) => (
        <a key={property.id} href={`/PropertyDetails/${property.id}`}>
          <PropertyCard property={property} />
        </a>
      ))}
    </div>
  );
};

export default PropertyMap;

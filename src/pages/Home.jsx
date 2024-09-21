import React from "react";
import ItemManager from "../Components/ItemManager";
import FilterControls from "../Components/FilterContols";
import PropertyMap from "../Components/PropertyMap";

const Home = () => {
  return (
    <div className="px-[162px] pt-[77px]">
      <ItemManager />
      <FilterControls />
      <PropertyMap />
    </div>
  );
};

export default Home;

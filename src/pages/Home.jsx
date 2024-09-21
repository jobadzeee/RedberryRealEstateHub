import React from "react";
import ItemManager from "../components/ItemManager";
import FilterControls from "../components/FilterContols";
import PropertyMap from "../components/PropertyMap";

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

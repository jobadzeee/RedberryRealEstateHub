import React from "react";
import ItemManager from "../components/ItemManager";
import FilterContols from "../components/FilterContols";
import PropertyMap from "../components/PropertyMap";

const Home = () => {
  return (
    <div className="px-[162px] pt-[77px]">
      <ItemManager />
      <FilterContols />
      <PropertyMap />
    </div>
  );
};

export default Home;

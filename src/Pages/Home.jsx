import React from "react";
import ItemManager from "../Components/ItemManager";
import FilterContols from "../Components/FilterContols";

const Home = () => {
  return (
    <div className="px-[162px] pt-[77px]">
      <ItemManager />
      <FilterContols />
    </div>
  );
};

export default Home;

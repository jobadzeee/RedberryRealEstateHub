import React, { useState } from "react";
import ItemManager from "../Components/ItemManager";
import FilterControls from "../Components/FilterContols"
import PropertyMap from "../Components/PropertyMap";

const Home = () => {
  const [area, setArea] = useState(null);
  const [bedrooms, setBedrooms] = useState([]);
  const [price, setPrice] = useState(null);
  const [region, setRegion] = useState([]);
  const [allReset, setAllReset] = useState(false);

  const handleAreaChange = (value) => {
    setArea(value);
  };

  const handleBedroomsChange = (value) => {
    setBedrooms(value);
  };

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const handleRegionChange = (value) => {
    setRegion(value);
  };

  const handleReset = () => {
    setArea(null);
    setBedrooms([]);
    setPrice(null);
    setRegion([]);
    setAllReset(true);
  };

  return (
    <div className="px-[162px] pt-[77px]">
      <ItemManager
        regionChangeEmit={handleRegionChange}
        priceChangeEmit={handlePriceChange}
        areaChangeEmit={handleAreaChange}
        bedroomsChangeEmit={handleBedroomsChange}
        allReset={allReset}
      />
      <FilterControls
        region={region}
        price={price}
        area={area}
        bedrooms={bedrooms}
        handleReset={handleReset}
      />
      <PropertyMap
        region={region}
        price={price}
        area={area}
        bedrooms={bedrooms}
      />
    </div>
  );
};

export default Home;
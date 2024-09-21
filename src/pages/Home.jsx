import React, { useState, useEffect } from "react";
import ItemManager from "../Components/ItemManager";
import FilterControls from "../Components/FilterContols";
import PropertyMap from "../Components/PropertyMap";

const Home = () => {
  const getLocalStorageItem = (key) => {
    const item = localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error parsing ${key} from localStorage`, error);
      return null; 
    }
  };

  const [area, setArea] = useState(getLocalStorageItem('area') || null);
  const [bedrooms, setBedrooms] = useState(getLocalStorageItem('bedrooms') || []);
  const [price, setPrice] = useState(getLocalStorageItem('price') || null);
  const [region, setRegion] = useState(getLocalStorageItem('region') || []);
  const [allReset, setAllReset] = useState(false);


  const handleAreaChange = (value) => {
    setArea(value);
    localStorage.setItem('area', JSON.stringify(value));
  };

  const handleBedroomsChange = (value) => {
    setBedrooms(value);
    localStorage.setItem('bedrooms', JSON.stringify(value));
  };

  const handlePriceChange = (value) => {
    setPrice(value);
    localStorage.setItem('price', JSON.stringify(value));
  };

  const handleRegionChange = (value) => {
    setRegion(value);
    localStorage.setItem('region', JSON.stringify(value));
  };

  const handleReset = () => {
    setArea(null);
    setBedrooms([]);
    setPrice(null);
    setRegion([]);
    setAllReset(true);
    localStorage.removeItem('area');
    localStorage.removeItem('bedrooms');
    localStorage.removeItem('price');
    localStorage.removeItem('region');
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

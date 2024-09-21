import React, { useState } from "react";
import ItemManager from "../components/ItemManager";
import FilterContols from "../components/FilterContols";
import PropertyMap from "../components/PropertyMap";

const Home = () => {
  const [region, setRegion] = useState(null);
  const [price, setPrice] = useState(null);
  const [area, setArea] = useState(null);
  const [bedrooms, setBedrooms] = useState(null);
  const [allReset, setAllReset] = useState(false);

  const regionChange = (value) => {
    setRegion(value);
  };
  const priceChange = (value) => {
    setPrice(value);
  };

  const areaChange = (value) => {
    setArea(value);
  };

  const bedroomsChange = (value) => {
    setBedrooms(value);
  };

  const reset = () => {
    setRegion(null);
    setPrice(null);
    setArea(null);
    setBedrooms(null);
    setAllReset(true)
    setTimeout(() => setAllReset(false), 0);

  };

  return (
    <div className="px-[162px] pt-[77px]">
      <ItemManager
        regionChangeEmit={(event) => regionChange(event)}
        priceChangeEmit={(event) => priceChange(event)}
        areaChangeEmit={(event) => areaChange(event)}
        bedroomsChangeEmit={(event) => bedroomsChange(event)}
        allReset={allReset}
      />
      <FilterContols
        region={region}
        price={price}
        area={area}
        bedrooms={bedrooms}
        handleReset={reset}
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

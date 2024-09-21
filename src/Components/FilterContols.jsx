import React from "react";
import ListItem from "./ListItem";
import { ReactComponent as Xbtn } from "../assets/images/Delete.svg";
import { GetRegions } from "../queries/GetRegions";

const FilterControls = ({ region, price, area, bedrooms, handleReset }) => {
  const { data: regions } = GetRegions();

  const reset = () => {
    handleReset();
  };

  const hasActiveFilters = 
    (region && region.length > 0) || 
    (price && (price.minValue || price.maxValue)) || 
    (area && (area.minValue || area.maxValue)) || 
    (bedrooms && bedrooms.some(bed => bed));

  return (
    <ul className="flex pt-4 space-x-2 font-firaGo font-normal">
      {region &&
        region.map((e) => {
          const foundRegion = regions.find((v) => v.id === e);
          return foundRegion ? (
            <ListItem variant="rounded" key={e}>
              <p>{foundRegion.name}</p> <Xbtn />
            </ListItem>
          ) : null;
        })}
      {price && (price.minValue || price.maxValue) && (
        <ListItem variant="rounded">
          <p>
            {price.minValue || ''} - {price.maxValue || ''} ₾
          </p>{" "}
          <Xbtn />
        </ListItem>
      )}
      {area && (area.minValue || area.maxValue) && (
        <ListItem variant="rounded">
          <p>
            {area.minValue || ''} - {area.maxValue || ''} მ²
          </p>{" "}
          <Xbtn />
        </ListItem>
      )}
      {bedrooms &&
        bedrooms.map((e, i) => {
          if (e) {
            return (
              <ListItem variant="rounded" key={i}>
                <p>{i + 1}</p> <Xbtn />
              </ListItem>
            );
          }
          return null;
        })}
      {hasActiveFilters && (
        <button className="flex items-center gap-1" onClick={reset}>
          გასუფთავება
        </button>
      )}
    </ul>
  );
};

export default FilterControls;
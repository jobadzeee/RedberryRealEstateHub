import React from "react";
import ListItem from "./ListItem";

const FilterContols = () => {
  return (
    <ul className="flex pt-4 space-x-2 font-firaGo font-normal">
      <ListItem variant="rounded">
        <p>თბილისი x</p>
      </ListItem>
      <ListItem variant="rounded">
        <p>20000₾ - 100000₾ x</p>
      </ListItem>
    </ul>
  );
};

export default FilterContols;

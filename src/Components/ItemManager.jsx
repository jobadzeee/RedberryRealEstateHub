import React, { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import AgentUpload from "./AgentUpload";
import Modal from "./Modal";
import DropdownMenu from "./DropdownMenu";

const ItemManager = ({regionChangeEmit, priceChangeEmit, areaChangeEmit, bedroomsChangeEmit, allReset}) => {
  const [isOpen, setIsOpen] = useState(false);

  const regionChange = (value) => {
    regionChangeEmit(value)
  }

  const priceChange = (value) => {
    priceChangeEmit(value)
  }

  const areaChange = (value) => {
    areaChangeEmit(value)
  }

  const bedroomsChange = (value) => {
    bedroomsChangeEmit(value)
  }


  

  const showAlert = () => {
    alert("Agent added successfully");
  };
  return (
    <div className="flex justify-between">
      <div className="flex space-x-6 p-[6px] rounded-[10px] border-[#DBDBDB] border-[1px]">
        <DropdownMenu text="რეგიონი" type="region" regionChange={event=>regionChange(event)} allReset={allReset} />
        <DropdownMenu text="საფასო კატეგორია" type="price" priceChange={event=>priceChange(event)} alallReset={allReset}lReset />
        <DropdownMenu text="ფართობი" type="area" areaChange={event=>areaChange(event)} allReset={allReset} />
        <DropdownMenu text="საძინებლების რაოდენობა" type="rooms" checkboxChange={event=>bedroomsChange(event)} allReset={allReset} />
      </div>
      <div className="space-x-4">
        <NavLink to="/Listing">
          <Button variant="primary" text="+ ლისტინგის დამატება" />
        </NavLink>
        <Button
          variant="outline"
          onClick={() => setIsOpen(true)}
          text="+ აგენტის დამატება"
        />
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        variant="blur"
        className="w-[1009px] rounded-[10px] bg-white px-[105px] py-[87px]"
      >
        <AgentUpload closeModal={() => setIsOpen(false)} add={showAlert} />
      </Modal>
    </div>
  );
};

export default ItemManager;

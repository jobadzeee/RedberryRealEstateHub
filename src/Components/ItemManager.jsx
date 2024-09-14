import React, { useState } from "react";
import { ReactComponent as ArrowSvg } from "../assets/images/downArrow.svg";
import Button from "./Button";
import ListItem from "./ListItem";
import { NavLink } from "react-router-dom";
import AgentUpload from "./AgentUpload";

const ItemManager = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between">
      <ul className="flex space-x-6 p-[6px] rounded-[10px] border-[#DBDBDB] border-[1px]">
        <ListItem variant="basic">
          <p>რეგიონი</p>
          <ArrowSvg />
        </ListItem>
        <ListItem variant="basic">
          <p>საფასო კატეგორია</p>
          <ArrowSvg />
        </ListItem>
        <ListItem variant="basic">
          <p>ფართობი</p>
          <ArrowSvg />
        </ListItem>
        <ListItem variant="basic">
          <p>საძინებლების რაოდენობა</p>
          <ArrowSvg />
        </ListItem>
      </ul>
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
      <AgentUpload isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
};

export default ItemManager;

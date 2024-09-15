import React, { useState } from "react";
import { ReactComponent as ArrowSvg } from "../assets/images/downArrow.svg";
import Button from "./Button";
import ListItem from "./ListItem";
import { NavLink } from "react-router-dom";
import AgentUpload from "./AgentUpload";
import Modal from "./Modal";

const ItemManager = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [region, setRegion] = useState(false);

  const showAlert = () => {
    alert("Agent added successfully");
  };
  return (
    <div className="flex justify-between">
      <ul className="flex space-x-6 p-[6px] rounded-[10px] border-[#DBDBDB] border-[1px]">
        <ListItem variant="basic" onClick={() => setRegion(true)}>
          <p>რეგიონი</p>
          <ArrowSvg />
          <Modal
            isOpen={region}
            closeModal={() => setRegion(false)}
            variant="normal"
            className="w-[730px] h-[299px] bg-white rounded-[10px] bg-red px-[105px] py-[87px]"
            type="region"
          >
            <p>random</p>
          </Modal>
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

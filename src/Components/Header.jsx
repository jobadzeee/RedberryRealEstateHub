import React from "react";
import { ReactComponent as Logo } from "../Images/LOGO-02 3.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <NavLink to="/">
      <div className="border-[1px] border-[#DBDBDB] h-[100px] flex items-center ">
        <Logo className="w-[150px] h-[24px] ml-[162px]" />
      </div>
    </NavLink>
  );
};

export default Header;

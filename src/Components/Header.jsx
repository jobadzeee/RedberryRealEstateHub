import React from "react";
import { ReactComponent as Logo } from "../Images/LOGO-02 3.svg";

const Header = () => {
  return (
    <div className="border-[1px] border-[#DBDBDB] h-[100px] flex items-center ">
      <Logo className="w-[150px] h-[24px] ml-[162px]" />
    </div>
  );
};

export default Header;

import React from "react";
import logo from "../app/assets/images/LightLogo.svg";
import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

function SidebarLogo(props) {
  return (
    <div className=" relative px-1">
      {props.show && !props.darkMode && (
        <Link to="/dashboard">
          <img src={logo} className="w-7 mx-auto my-3" alt="Company Logo" />
        </Link>
      )}
      {props.show && props.darkMode && (
        <Link to="/dashboard">
          {/* <img src={darkLogo} className="w-7 mx-auto my-3" alt="Dark Logo" /> */}
          <img src={logo} className="w-7 mx-auto my-3" alt="Company Logo" />
        </Link>
      )}
      <div
        className={` bg-white rounded-full hover:bg-indigo-50 top-60 absolute border  hover:border-blue-200  ${
          !props.show ? "rotate-180 left-[2.9rem] p-[2px]" : "left-[7.3rem]  "
        }`}
      >
        <BiChevronLeft
          onClick={props.toggleSidebar}
          className={`text-xl   cursor-pointer transform text-indigo-500 `}
        />
      </div>
    </div>
  );
}

export default SidebarLogo;

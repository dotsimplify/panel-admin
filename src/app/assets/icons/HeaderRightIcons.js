import React from "react";
import { FaRegBell } from "react-icons/fa";
import { BsCart2, BsSun, BsMoon } from "react-icons/bs";

function HeaderRightIcons(props) {
  return (
    <div className="flex justify-start items-center">
      {props.darkMode ? (
        <BsSun
          onClick={props.darkModeHandler}
          className=" text-iconColor text-xl dark:text-darkmodeFots cursor-pointer mx-4"
        />
      ) : (
        <BsMoon
          onClick={props.darkModeHandler}
          className="  text-iconColor text-xl dark:text-darkmodeFots cursor-pointer mx-4"
        />
      )}
      <div className="relative">
        <FaRegBell className=" text-iconColor text-xl dark:text-darkmodeFots cursor-pointer" />
        <h4 className=" py-[2px] px-[6px] -top-2 left-2 text-center text-xxs text-slate-100 rounded-full bg-red-500 absolute">
          2
        </h4>
      </div>
    </div>
  );
}

export default HeaderRightIcons;

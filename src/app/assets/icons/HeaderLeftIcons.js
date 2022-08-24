import React from "react";
import { FaRegCalendar, FaRegCommentAlt, FaRegEnvelope } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { IoMdCheckboxOutline } from "react-icons/io";

function HeaderLeftIcons() {
  return (
    <div className={`flex  justify-start items-center`}>
      <FaRegCalendar className="text-xl  hover:text-indigo-500 dark:text-darkmodeFots text-iconColor cursor-pointer" />
      <FaRegCommentAlt className=" text-lg mx-4  hover:text-indigo-500  dark:text-darkmodeFots text-iconColor cursor-pointer" />
      <FaRegEnvelope className=" text-xl   hover:text-indigo-500 dark:text-darkmodeFots text-iconColor cursor-pointer" />
      <IoMdCheckboxOutline className=" text-xl  hover:text-indigo-500  mx-4 dark:text-darkmodeFots text-iconColor cursor-pointer" />
      <AiOutlineStar className="text-xl hover:text-indigo-500  dark:text-darkmodeFots text-orange-500 cursor-pointer" />
    </div>
  );
}

export default HeaderLeftIcons;

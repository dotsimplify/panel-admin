import React from "react";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const ActionIcons = (props) => {
  return (
    <td className=" flex justify-center items-center text-sm py-2 px-20  ">
      {props.actionTableAllOptions && (
        <div
          onClick={props.view}
          className="p-2 group hover:bg-gray-100 rounded-full"
        >
          <AiOutlineEye className="font-normal group-hover:text-blue-500 dark:text-darkmodeFots" />
        </div>
      )}
      {!props.hideUpdateIcon && (
        <Link to={`${props.updateLinkString}/${props.updateLinkTerm}`}>
          <div className="p-2 group hover:bg-gray-100 rounded-full mx-1">
            <FaEdit className="font-normal group-hover:text-blue-500 dark:text-darkmodeFots" />
          </div>
        </Link>
      )}
      {!props.hideDeleteIcon && (
        <Link to={`${props.deleteLinkString}/${props.deleteLinkTerm}`}>
          <div className="p-2 group hover:bg-gray-100 rounded-full">
            <BsTrash className="font-normal text-red-600 group-hover:text-blue-500 dark:text-darkmodeFots" />
          </div>
        </Link>
      )}
    </td>
  );
};

export default ActionIcons;

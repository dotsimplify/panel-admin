import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Gif from "../shared/Gif";
import deleteIcon from "../app/assets/gif/delete.json";
import successIcon from "../app/assets/gif/success.json";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/**
 * <DeleteModal message={dynamicMessageAfter_API_CALl} cancelLink={LinkBacktoList} deleteFunction={function_for_delete_request}/>
 */
const DeleteModal = (props) => {
  const loading = useSelector((state) => state.app.isLoading);
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-slate-800 bg-opacity-90 overflow-hidden">
      <div
        style={{ top: "25%", bottom: "25%", left: "34%", right: "34%" }}
        className="bg-white bg-opacity-100 absolute rounded-md"
      >
        <div className="flex justify-between items-center border-b px-4 pt-4 pb-1 border-slate-300">
          <p className="text-sm font-semibold text-gray-600">Notification</p>
          <Link to={props.cancelLink}>
            <AiOutlineCloseCircle className=" text-indigo-500 text-2xl hover:text-red-500 cursor-pointer" />
          </Link>
        </div>
        <div className="w-1/3 mx-auto ">
          <Gif image={!props.message ? deleteIcon : successIcon} loop={false} />
        </div>
        <h3
          className={` ${
            props.message && "mt-6"
          }  text-center text-base text-gray-600 font-semibold`}
        >
          {props.message || "Are you sure you want to delete ?"}
        </h3>
        {!props.message && (
          <div className="flex pt-6">
            <div className="flex justify-between items-center w-2/3 mx-auto">
              <div>
                <button
                  disabled={loading}
                  onClick={() => props.deleteFunction()}
                  className="px-6 py-1 outline-none disabled:bg-gray-400 disabled:cursor-no-drop rounded-md text-white bg-red-600 hover:bg-opacity-80  "
                >
                  {loading ? "Processing" : "Yes"}
                </button>
              </div>
              <div>
                <Link to={props.cancelLink}>
                  <button className="px-4 py-1 rounded-md text-white bg-gray-500 hover:bg-opacity-80  ">
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteModal;

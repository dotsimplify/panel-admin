import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Gif from "../../shared/Gif";
import logoutIcon from "../../app/assets/gif/iconLogOut.json";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import { setAuthorizationToken } from "../../utils/helpers/setAuthorizationToken";
import {
  adminlogoutRequest,
  authenticationStatus,
} from "../../features/loginSlice";
import { useDispatch } from "react-redux";

const Logout = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutFunction = () => {
    dispatch(authenticationStatus(false));
    setAuthorizationToken(false);
    dispatch(adminlogoutRequest());
    localStorage.removeItem("panelToken");
    Cookie.remove("refreshToken");
    navigate("/");
  };
  return (
    <div className="fixed z-50  top-0 left-0 right-0 bottom-0 bg-slate-800 bg-opacity-90 overflow-hidden">
      <div
        style={{ top: "25%", bottom: "25%", left: "34%", right: "34%" }}
        className="bg-white dark:bg-gray-600 bg-opacity-100 border-transparent border dark:border-gray-400 absolute rounded-md"
      >
        <div className="flex justify-between items-center border-b px-4 pt-4 pb-1  border-slate-300">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-200">
            Notification
          </p>
          <Link to={props.cancelLink}>
            <AiOutlineCloseCircle className=" text-indigo-500 text-2xl dark:text-red-300 font-normal hover:text-red-500 cursor-pointer" />
          </Link>
        </div>
        <div className="w-1/3 mx-auto ">
          <Gif image={logoutIcon} loop={false} />
        </div>
        <h3
          className={`text-center text-base text-gray-600 font-semibold dark:text-gray-200`}
        >
          Are you sure you want to logout ?
        </h3>

        <div className="flex pt-6">
          <div className="flex justify-between items-center w-2/3 mx-auto">
            <div>
              <button
                onClick={() => logOutFunction()}
                className="px-6 py-1 outline-none disabled:bg-gray-400 disabled:cursor-no-drop rounded-md text-white bg-red-600 hover:bg-opacity-80  "
              >
                Yes
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
      </div>
    </div>
  );
};

export default Logout;

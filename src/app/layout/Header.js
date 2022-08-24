import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderLeftIcons from "../assets/icons/HeaderLeftIcons";
import HeaderRightIcons from "../assets/icons/HeaderRightIcons";
import { FiSearch } from "react-icons/fi";
import { ReactComponent as English } from "../assets/images/English.svg";

function Header(props) {
  const userData = useSelector((state) => state.user.userDetails);

  return (
    <div
      style={{ width: "100%" }}
      className={`px-4 border-1 ${
        userData !== undefined && userData.name ? "py-1" : "py-3"
      }   sticky top-1 z-50 border-gray rounded flex justify-between items-center bg-secoundry drop-shadow-md dark:border-darkmodeSecoundry dark:bg-darkmodeSecoundry`}
    >
      <HeaderLeftIcons />
      <div className="flex justify-around items-center ">
        <div className="flex justify-around items-center">
          <FiSearch className=" text-iconColor dark:text-darkmodeFots cursor-pointer" />

          <div className="mx-1">
            <English className="h-3 w-12 cursor-pointer mr-1" />
          </div>
          <div className=" text-iconColor dark:text-gray-200 font-medium -ml-4 text-sm flex  items-center">
            English
          </div>
        </div>

        <HeaderRightIcons
          darkMode={props.darkMode}
          darkModeHandler={props.darkModeHandler}
        />
        {userData !== undefined && userData.name && (
          <div
            onClick={() => {
              props.setProfileDropDown(true);
            }}
            className=" ml-4 flex flex-row relative "
          >
            <div className="flex flex-col justify-center items-center">
              <div>
                <div className=" text-iconColor  dark:text-gray-200  text-xs">
                  {userData.name}
                </div>

                <div className=" text-iconColor dark:text-gray-200 font-medium text-xxs">
                  Admin
                </div>
              </div>
            </div>

            <div className="w-9 h-9 p-1 relative ml-2 dark:text-gray-300">
              <img
                className=" rounded-full w-full  bg-yellow-700 cursor-pointer"
                alt="user profile"
                src={userData.profilePic.url}
              />
              <div className=" bg-green-600 h-2.5 w-2.5 rounded-full top-6 absolute right-0"></div>
              <div
                className={`${
                  props.profileDropDown ? "" : "hidden"
                } absolute bg-white  dark:bg-darkmodeSecoundry border border-transparent dark:border-gray-500 shadow-xl min-w-[9rem] top-12  -left-24 rounded-md text-xs `}
              >
                <p className="py-2 px-4 dark:text-gray-300 hover:bg-indigo-500 rounded-t-md text-gray-700  hover:text-gray-50 cursor-pointer">
                  Profile
                </p>
                <p className="py-2 px-4 dark:text-gray-300 hover:bg-indigo-500 text-gray-700  hover:text-gray-50 cursor-pointer">
                  Change Password
                </p>
                <Link to="/logout">
                  <p className="py-2 px-4 dark:text-gray-300 hover:bg-indigo-500 rounded-b-md text-gray-700 hover:text-gray-50 cursor-pointer">
                    Logout
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

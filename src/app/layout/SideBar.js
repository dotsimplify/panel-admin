import React from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarLogo from "../../components/SidebarLogo";
import { sideBarData, sideBarData2 } from "./sideBarData";
import { useSelector } from "react-redux";

function SideBar(props) {
  const location = useLocation();
  const user = useSelector((state) => state.user.userDetails);

  return (
    <div
      className={` bg-secoundry hidden lg:block dark:bg-darkmodeSecoundry drop-shadow-md fixed h-screen ${
        props.show && "pl-2 pr-6"
      } `}
    >
      <SidebarLogo
        show={props.show}
        toggleSidebar={props.toggleSidebar}
        darkMode={props.darkMode}
      />

      {user.type === "M" ? (
        <ul>
          {sideBarData2?.length > 0 &&
            sideBarData2.map((item) => {
              return (
                <Link
                  key={item.title}
                  to={item.path}
                  state={{ from: item.title }}
                >
                  <li
                    className={`${
                      props.show ? " py-[1px]" : "px-3 py-1 "
                    }  text-white flex flex-row group hover:bg-secoundry dark:hover:bg-darkmodeSecoundry justify-start items-center text-sm `}
                  >
                    <div
                      className={`${
                        !props.show &&
                        location.pathname === item.path &&
                        "bg-slate-200 rounded-full "
                      } p-[5px]`}
                    >
                      {item.icon}
                    </div>
                    {props.show && (
                      <p
                        className={`text-gray-500 px-[4px]  text-xs group-hover:text-botton dark:text-gray-200`}
                      >
                        {props.show && item.title}
                      </p>
                    )}
                    {props.show && location.pathname.includes(item.path) && (
                      <div className=" bg-green-400 h-[5px] w-[5px] rounded-full"></div>
                    )}
                  </li>
                </Link>
              );
            })}
        </ul>
      ) : (
        <ul>
          {sideBarData?.length > 0 &&
            sideBarData.map((item) => {
              return (
                <Link
                  key={item.title}
                  to={item.path}
                  state={{ from: item.title }}
                >
                  <li
                    className={`${
                      props.show ? " py-[1px]" : "px-3 py-1 "
                    }  text-white flex flex-row group hover:bg-secoundry dark:hover:bg-darkmodeSecoundry justify-start items-center text-sm `}
                  >
                    <div
                      className={`${
                        !props.show &&
                        location.pathname === item.path &&
                        "bg-slate-200 rounded-full "
                      } p-[5px]`}
                    >
                      {item.icon}
                    </div>
                    {props.show && (
                      <p
                        className={`text-gray-500 px-[4px]  text-xs group-hover:text-botton dark:text-gray-200`}
                      >
                        {props.show && item.title}
                      </p>
                    )}
                    {props.show && location.pathname.includes(item.path) && (
                      <div className=" bg-green-400 h-[5px] w-[5px] rounded-full"></div>
                    )}
                  </li>
                </Link>
              );
            })}
        </ul>
      )}
    </div>
  );
}

export default SideBar;

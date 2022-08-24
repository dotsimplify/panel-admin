import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <div
      className={`grid gap-4 ${
        props.cols ? props.cols : "grid-cols-4"
      } grid-flow-row items-center`}
    >
      {props.content &&
        props.content.length > 0 &&
        props.content.map((item, index) => {
          return (
            <Link key={index} to={item.link}>
              <div className="border dark:text-gray-50  flex items-center border-indigo-200 shadow-transparent bg-transparent transition-background duration-300 ease-in-out hover:bg-indigo-400 p-4 group hover:border-indigo-400">
                {item.icon}
                <h4 className="text-gray-700  dark:text-gray-50 text-xs pl-3 group-hover:text-white">
                  {item.title}
                </h4>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Menu;

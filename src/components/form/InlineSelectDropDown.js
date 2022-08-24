import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
const InlineSelectDropDown = (props) => {
  const select = (opt) => {
    props.setValue(opt);
    props.setTouch(false);
  };
  return (
    <div className="w-full mx-3">
      <div className={`relative flex-grow w-full min-w-[8rem] `}>
        <h2
          onClick={() => props.setTouch((prev) => !prev)}
          className={` text-sm font-normal pr-8 pl-4 py-[7px] select-none 
text-blue-700 bg-gray-50 border capitalize rounded-md  transform cursor-pointer transition ease-in-out m-0 duration-500 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
        >
          {props.value
            ? props.value
            : props.defaultValue
            ? props.defaultValue
            : props.placeholderText}
        </h2>
        {props.touch && (
          <ul className="absolute z-40 max-h-52 cursor-pointer overflow-y-auto w-full top-9  border-l border-r border-b  border-gray-300 bg-white shadow-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
            {props.array !== undefined &&
              props.array.length > 0 &&
              props.array.map((opt, index) => (
                <li
                  onClick={() => select(opt)}
                  key={index}
                  className={`text-sm select-none  font-normal hover:bg-blue-500 hover:text-white px-4 capitalize py-1`}
                  value={opt}
                >
                  {opt}
                </li>
              ))}
          </ul>
        )}
        {!props.touch ? (
          <BsChevronDown className="absolute right-[6px] top-[9px] dark:text-gray-300 " />
        ) : (
          <BsChevronUp className="absolute right-[6px] top-[9px] dark:text-gray-300 " />
        )}
      </div>
    </div>
  );
};

export default InlineSelectDropDown;

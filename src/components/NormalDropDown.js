import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const NormalDropDown = (props) => {
  const select = (opt) => {
    props.setValue(opt);
    props.setTouch(false);
  };

  return (
    <section
      className={`  ${!props.touch ? "rounded" : ""} ${
        props.width && props.width
      }  `}
    >
      <h2
        className={`     ${
          props.labeltext ? `text-${props.labeltext}` : "text-sm"
        } select-none mb-1 font-medium dark:text-gray-100 text-gray-600 min-w-max `}
      >
        {props.label}
      </h2>
      <div className={` border-r border-solid border-gray-300 `}></div>

      <div
        className={`relative flex-grow w-full border dark:border-gray-500 border-gray-300 ${
          props.customMarginBottom && props.customMarginBottom
        }`}
      >
        <h2
          onClick={() => props.setTouch((prev) => !prev)}
          className={` block   ${!props.width ? props.width : "w-full"}  ${
            props.py ? `py-${props.py}` : "py-1"
          }   ${props.py ? `py-${props.py}` : "py-4"}   ${
            props.text ? `text-${props.text}` : "text-xs"
          } font-normal px-4 select-none 
text-gray-700 bg-gray-100 capitalize bg-clip-padding dark:bg-gray-600 dark:text-gray-200  bg-no-repeat transform cursor-pointer transition ease-in-out m-0 duration-500 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
        >
          {props.value
            ? props.value
            : props.defaultValue
            ? props.defaultValue
            : props.placeholderText}
        </h2>

        {props.touch && (
          <ul className="absolute z-40 max-h-48 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-200 overflow-y-auto w-full top-9  border-l border-r border-b  border-gray-300 bg-white shadow-md ">
            {props.array !== undefined &&
              props.array.length > 0 &&
              props.array.map((opt, index) => (
                <li
                  onClick={() => select(opt)}
                  key={index}
                  className={`${
                    props.text ? `text-${props.text}` : "text-xs"
                  } hover:bg-blue-500 hover:text-white px-4 capitalize py-1 `}
                  value={opt}
                >
                  {opt}
                </li>
              ))}
          </ul>
        )}
        {!props.touch ? (
          <BsChevronDown className="absolute right-4 top-2 dark:text-gray-400  " />
        ) : (
          <BsChevronUp className="absolute right-4 top-2  dark:text-gray-400 " />
        )}
      </div>
    </section>
  );
};

export default NormalDropDown;

{
  // Example Snippet
  /* <SelectForm
  text="text-xl" // text-xl text-xs
  width="100%" // w-48 , w-1/2 w-full
  multiple={true} // for multiple select
  name="select" // name
  array="array to iterate for option" // array to iterate
  py="py-4" // padding top & bottom
/>; */
}

import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const DropdownWithSearch = (props) => {
  const [search, setFilter] = useState("");
  const select = (opt) => {
    props.setValue(opt[props.objectProperty]);
    props.setTouch(false);
  };
  const filtered =
    props.array !== undefined &&
    props.array.length > 0 &&
    props.array.filter((result) => {
      return result[props.objectProperty]
        .toLowerCase()
        .includes(search.toLowerCase());
    });
  const keyUpSearch = (e) => {
    if (e.target.value) {
      setFilter(e.target.value);
    } else {
      setFilter("");
    }
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
        } select-none mb-2  text-gray-700 min-w-max dark:text-gray-300 `}
      >
        {props.label}
      </h2>
      <div
        className={` border-r border-solid border-gray-300 dark:border-gray-500`}
      ></div>

      <div
        className={`relative flex-grow w-full border ${
          props.error
            ? "border-red-500"
            : "border-gray-300 dark:border-gray-600"
        } ${props.customMarginBottom && props.customMarginBottom}`}
      >
        <h2
          onClick={() => props.setTouch((prev) => !prev)}
          className={` block   ${!props.width ? props.width : "w-full"}  ${
            props.py ? `py-${props.py}` : "py-1"
          }   ${props.py ? `py-${props.py}` : "py-4"}   ${
            props.text ? `text-${props.text}` : "text-xs"
          } font-normal px-4 select-none 
text-gray-700 bg-gray-100 bg-clip-padding dark:bg-gray-600 dark:text-gray-300 bg-no-repeat transform cursor-pointer transition ease-in-out m-0 duration-500 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
        >
          {props.value ? props.value : props.placeholderText}
        </h2>

        {props.touch && (
          <ul className="absolute z-40 dark:bg-gray-600 dark:text-gray-300 max-h-48 overflow-y-auto w-full top-9  border-l border-r border-b  border-gray-300 bg-white shadow-md ">
            <input
              onKeyUp={keyUpSearch}
              className="w-full py-1 outline-none px-4 border-t border-b border-gray-300 focus:bg-gray-50"
              type="text"
              placeholder="Search"
            />
            {!search &&
              props.array !== undefined &&
              props.array.length > 0 &&
              props.array.map((opt, index) => (
                <li
                  onClick={() => select(opt)}
                  key={index}
                  className={`${
                    props.text ? `text-${props.text}` : "text-xs"
                  } hover:bg-blue-500 hover:text-white px-4 py-1`}
                  value={opt[props.objectProperty]}
                >
                  {opt[props.objectProperty]}
                </li>
              ))}
            {search &&
              filtered.length > 0 &&
              filtered.map((opt, index) => (
                <li
                  onClick={() => select(opt)}
                  key={index}
                  className={`${
                    props.text ? `text-${props.text}` : "text-xs"
                  } hover:bg-blue-500 hover:text-white px-4 py-1`}
                  value={opt[props.objectProperty]}
                >
                  {opt[props.objectProperty]}
                </li>
              ))}
            {search && filtered.length == 0 && (
              <li className="  px-4 py-1">No item found</li>
            )}
          </ul>
        )}
        {!props.touch ? (
          <BsChevronDown className="absolute right-4 top-2 dark:text-gray-300 " />
        ) : (
          <BsChevronUp className="absolute right-4 top-2 dark:text-gray-300 " />
        )}
      </div>
    </section>
  );
};

export default DropdownWithSearch;

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

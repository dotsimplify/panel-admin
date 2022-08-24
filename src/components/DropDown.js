import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropDown = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [start, setStart] = useState(false);

  const onGenerate = (val) => {
    props.setSelectedColor(val);
    setShowDropDown(false);
  };
  const showDropDownFunction = () => {
    !showDropDown && setShowDropDown(true);
    !start && setStart(true);
  };
  useEffect(() => {}, [props.edit, props.selectedColor]);
  return (
    <div>
      <h3 className="text-gray-500 text-sm mb-1">{props.title}</h3>
      <div
        onClick={showDropDownFunction}
        className={` border ${
          showDropDown ? "border-indigo-500" : "border-Textgray"
        } rounded flex relative justify-between items-center h-9 pl-4 select-none`}
      >
        <div className=" text-sm text-gray-400">
          {!start && props.edit && props.color
            ? props.color
            : props.edit && props.selectedColor
            ? props.selectedColor
            : !props.edit && props.selectedColor
            ? props.selectedColor
            : "Select Item"}
        </div>
        {showDropDown ? (
          <IoIosArrowUp className=" text-indigo-500 cursor-pointer mr-2" />
        ) : (
          <IoIosArrowDown className=" text-iconColor cursor-pointer mr-2" />
        )}

        {showDropDown && (
          <div className=" absolute bg-white shadow-dhruv w-full top-10 left-0">
            {props.ArrayList &&
              props.ArrayList.length > 0 &&
              props.ArrayList.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      onGenerate(item);
                    }}
                    style={{ color: item }}
                    className=" capitalize shadow-xl hover:bg-gray-200 text-xs py-1.5 pl-4   hover:text-white "
                  >
                    {item}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;

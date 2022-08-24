import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setPills } from "../features/appSlice";

const PillsDropDown = (props) => {
  const dispatch = useDispatch();
  const showDropDown = useSelector((state) => state.app.showPills);

  const createPills = (val) => {
    let temp = [];
    if (props.pills.includes(val)) {
      temp = [...props.pills];
      temp.splice(props.pills.indexOf(val), 1);
    } else {
      temp = [...props.pills, val];
    }
    props.setTagPills(temp);
    dispatch(setPills(false));
  };

  const singlePillDelete = (val) => {
    let temp = [];
    temp = [...props.pills];
    temp.splice(props.pills.indexOf(val), 1);
    props.setTagPills(temp);
    dispatch(setPills(false));
  };
  const showDropDownFunction = () => {
    if (props.pills.length === 5) return;
    !showDropDown && dispatch(setPills(true));
  };

  // useEffect(() => {
  //   if (isEmptyObject(singleBlogDetail) && singleBlogDetail.tags) {
  //     const tagsToArray = singleBlogDetail.tags.split(" ").join("");
  //     const newTags = tagsToArray.replace(/,/g, " ").split(" ");
  //     console.log("this ran");
  //     props.setPills(newTags);
  //   }
  // }, [isEmptyObject(singleBlogDetail)]);

  return (
    <div>
      <h3 className=" text-gray-500 text-sm mb-2 ">
        {props.title}
        <span className="text-red-500 text-xs ml-3">
          ( Maximum 5 tags can be selected )
        </span>
      </h3>
      <div
        className={` border ${
          showDropDown ? "border-indigo-500" : "border-Textgray"
        } rounded flex justify-between items-center py-0.5 pl-1 select-none`}
      >
        <div className="flex justify-start items-center w-full">
          {props.pills !== undefined &&
            props.pills.length > 0 &&
            props.pills.map((pill, index) => {
              return (
                <div
                  onClick={() => singlePillDelete(pill)}
                  className="text-xs mr-2 flex items-center rounded border border-gray-200 px-2  text-white "
                  key={index}
                >
                  <h2 className="bg-indigo-400 py-1 px-2 text-xs min-w-max rounded-sm">
                    {pill}
                  </h2>
                  <AiOutlineCloseCircle className="ml-1 text-xl text-gray-400 cursor-pointer hover:text-red-500" />
                </div>
              );
            })}
          <div
            onClick={showDropDownFunction}
            className=" text-sm text-gray-400 ml-8 py-1 relative w-full"
          >
            {props.pills !== undefined && props.pills.length === 5
              ? "Max 5 tags"
              : "Click 🖐️ to add Tag"}
            {showDropDown && (
              <div className=" absolute z-30 bg-white shadow-dhruv w-full top-9 left-0 max-h-[12rem] overflow-y-scroll">
                {props.ArrayList &&
                  props.ArrayList.length > 0 &&
                  props.ArrayList.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          createPills(item.tagName);
                        }}
                        className="shadow-xl hover:bg-indigo-600 group text-xs p-2 px-4 flex justify-between items-center  hover:text-white "
                      >
                        <div>{item.tagName}</div>
                        {props.pills.includes(item.tagName) && (
                          <div className="bg-green-500 rounded-sm text-xs text-white px-4 py-0.5 group-hover:bg-white group-hover:text-black mr-4">
                            Selected
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
        {showDropDown ? (
          <IoIosArrowUp className=" text-indigo-500 cursor-pointer mr-2" />
        ) : (
          <IoIosArrowDown className=" text-iconColor cursor-pointer mr-2" />
        )}
      </div>
    </div>
  );
};

export default PillsDropDown;

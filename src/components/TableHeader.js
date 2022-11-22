import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import InlineSelectDropDown from "./form/InlineSelectDropDown";
import generalHelpers from "../utils/helpers/generalHelpers";

const TableHeader = (props) => {
  const [recordNumber, setRecord] = useState(0);
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState("");
  const [inputValue, setInputValue] = useState("");
  const loading = useSelector((state) => state.app.isLoading);
  const adjustRecordShow = () => {
    if (!recordNumber) {
      return setError(true);
    }
    recordNumber > 0 && error && setError(false);
    recordNumber > 0 && props.setPostsPerPage(recordNumber);
  };
  return (
    <div>
      <div className="flex justify-between items-center border-b dark:border-gray-600">
        <h4 className="pl-6 pt-2  pb-1 text-indigo-500 font-medium">
          {props.heading && props.length
            ? `${props.heading} (${props.length})`
            : props.heading}
        </h4>
        {props.extraLink && (
          <div className="pr-8 pt-1">
            <Link to={props.extraLink}>
              <button className=" px-3 py-[5px] rounded text-white text-xs bg-botton hover:bg-opacity-90">
                {props.extraLinkName}
              </button>
            </Link>
          </div>
        )}
      </div>
      <div
        className={`${
          props.showDateSearch || props.withDateSearchOnly
            ? "flex-row-reverse"
            : "flex-row"
        }  flex justify-between items-center py-3 pr-4 border-b dark:border-gray-600 border-gray-300/70 dark:bg-darkmodeSecoundry `}
      >
        {!props.hidePagination && (
          <div
            className={`${
              props.showDateSearch ? "justify-end" : "justify-start"
            } flex items-center`}
          >
            <h6 className=" text-xs dark:text-darkmodeFots px-6">Entries</h6>
            <input
              type="number"
              min="1"
              onChange={(e) => setRecord(e.target.value)}
              placeholder={props.postsPerPage}
              className={` border caret-indigo-600 text-sm px-2  ${
                error
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-300"
              } outline-none py-1 w-1/6 text-blue-500 rounded placeholder-slate-300 mr-4 dark:bg-darkmodeSecoundry`}
            />
            <button
              type="button"
              onClick={adjustRecordShow}
              className=" px-3 py-[5px] rounded text-white text-sm bg-botton hover:bg-opacity-90"
            >
              Records Per Page
            </button>
          </div>
        )}
        {props.showDateSearch && (
          <div className="flex items-center  pl-4">
            <div>
              <input
                type="date"
                className="outline-none border px-2 py-1 rounded-md dark:text-gray-300 dark:bg-gray-600 dark:border-gray-600"
                value={props.onDate}
                onChange={(e) => props.setOnDate(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
              />
            </div>
            <InlineSelectDropDown
              value={props.selectedGame}
              setValue={props.setSelectedGame}
              touch={props.touchDropDown}
              setTouch={props.setTouchDropDown}
              defaultValue={props.defaultValue}
              // placeholderText="Game Name"
              // label="hell0"
              array={props.gamesArray} // array to iterate
              py="py-4" // padding top & bottom
            />
            <div>
              <button
                onClick={() => props.freshDataFetch()}
                className="px-4 py-[8px] text-center rounded outline-none text-white text-sm bg-botton hover:bg-opacity-90"
              >
                {loading ? (
                  <svg
                    className="animate-spin  h-5 w-5  text-white inline"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        )}
        {props.showCalculationButton &&
          props.dataArray &&
          props.dataArray.length > 0 && (
            <div className="flex items-center justify-between  pl-4">
              <div className="pr-4 text-center bg-gray-200 px-4 py-0.5 rounded-md mr-6">
                <p className="text-xs py-0.5">Total Add</p>
                <p className="text-xs text-green-600 font-bold">
                  {generalHelpers.sumfromArrayObj(props.dataArray, "addPoints")}
                </p>
              </div>
              <div className="pr-4 text-center bg-gray-200 px-4 py-0.5 rounded-md">
                <p className="text-xs py-0.5">Total Withdraw</p>
                <p className="text-xs text-red-600 font-bold">
                  {generalHelpers.sumfromArrayObj(
                    props.dataArray,
                    "WithdrawPoints"
                  )}
                </p>
              </div>
            </div>
          )}
        {props.withDateSearchOnly && (
          <div className="flex items-center  pl-4">
            <div className="mr-3">
              <input
                type="date"
                className="outline-none border px-2 py-1 rounded-md"
                value={props.onDate}
                onChange={(e) => props.setOnDate(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div>
              <button
                onClick={() => props.freshDataFetch()}
                className="px-4 py-[8px] text-center rounded outline-none text-white text-sm bg-botton hover:bg-opacity-90"
              >
                {loading ? (
                  <svg
                    className="animate-spin  h-5 w-5  text-white inline"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        )}

        {!props.hideSearchBar && (
          <div>
            <div
              onClick={() => setFocus(true)}
              className={`flex items-center pr-3 border transition-all transform duration-300 ease-in-out border-gray-300 ${
                focus && "border-blue-400"
              } `}
            >
              <input
                type="text"
                value={inputValue}
                className="  caret-indigo-600 text-sm px-3  outline-none py-1  rounded mr-4 dark:bg-darkmodeSecoundry"
                placeholder="Search..."
                onChange={(e) => {
                  props.setSearch(e.target.value);
                  setInputValue(e.target.value);
                }}
                onBlur={() => setFocus(false)}
              />
              {props.search && (
                <AiOutlineCloseCircle
                  onClick={() => {
                    props.setSearch("");
                    setInputValue("");
                  }}
                  className="text-red-400"
                />
              )}
            </div>
          </div>
        )}
        {!props.showNewButton && (
          <div className="">
            <Link to={props.routs}>
              <div className="z-30  flex justify-start items-center mr-4 p-1 px-2 border border-transparent group rounded-md transform ease-in-out duration-500 transition-transform translate-x-2 hover:translate-x-0 hover:bg-indigo-50 hover:dark:bg-gray-800 hover:border-gray-300">
                <BsPlusCircle className=" dark:text-white text-blue-600 transform group-hover:rotate-90 ease-in-out duration-700 transition-transform" />
                <h2 className="opacity-0  group-hover:opacity-100 ml-2 text-sm ease-in-out duration-1000 transition-all font-normal  dark:text-white">
                  {props.ButtonName}
                </h2>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableHeader;

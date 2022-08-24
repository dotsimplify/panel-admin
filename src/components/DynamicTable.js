import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import generalHelpers from "../utils/helpers/generalHelpers";
import {
  BsSortNumericDown,
  BsSortNumericDownAlt,
  BsSortAlphaDown,
  BsSortAlphaDownAlt,
  BsSortDown,
  BsSortDownAlt,
} from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";
import { stringSorting, numberSort, dateSortWithTime } from "../utils/sorting";
import { formateDate, smallString, formatTime } from "../utils/helpers/helper";
import ActionIcons from "./ActionIcons";

let filter = [];
const DynamicTable = (props) => {
  const [array, setArray] = useState([]);
  const [order, setOrder] = useState("asc");
  const [sort, setSort] = useState(false);
  const [prev, setPrev] = useState(true);

  const onClickSort = (col, type) => {
    if (type === "string") {
      stringSorting(props.mappingDataArray, col, order, setOrder, setArray);
      setSort(true);
      filter = [];
      filter.push(col);
    }
    if (type === "number") {
      numberSort(props.mappingDataArray, col, prev, setPrev, setArray);
      setSort(true);
      filter = [];
      filter.push(col);
    }
    if (type === "date") {
      dateSortWithTime(props.mappingDataArray, col, order, setOrder, setArray);
      setSort(true);
      filter = [];
      filter.push(col);
    }
  };
  useEffect(() => {}, [sort]);
  useEffect(() => {}, [props.search]);
  return (
    <table className="table-fixed w-full py-6 overflow-hidden">
      <thead className="p-8 ">
        <tr className=" bg-table text-left">
          {props.tableHeaderArray !== undefined &&
            props.tableHeaderArray.length > 0 &&
            props.tableHeaderArray.map((cell, index) => {
              return (
                <th
                  key={index}
                  onClick={() => onClickSort(cell.code, cell.type)}
                  className={`${props.py ? props.py : "py-[6px]"} ${
                    cell.width && cell.width
                  } ${
                    cell.textCenter ? "text-center" : "pl-6"
                  }  group hover:bg-gray-200 dark:hover:bg-tableclmn dark:text-darkmodeFots text-gray-600 dark:bg-tableclmn select-none cursor-pointer`}
                >
                  <span
                    className={`mr-4 tracking-wider font-medium  ${
                      props.textSize ? props.textSize : "text-xs"
                    }`}
                  >
                    {cell.name}
                  </span>
                  {cell.type === "string" && !filter.includes(cell.code) && (
                    <BiSortAlt2
                      className={`${
                        props.textSize ? props.textSize : "text-base"
                      } inline text-gray-400 group-hover:text-blue-600`}
                    />
                  )}
                  {cell.type === "string" &&
                    sort &&
                    filter.includes(cell.code) &&
                    order === "asc" && (
                      <BsSortAlphaDownAlt
                        className={`${
                          props.textSize ? props.textSize : "text-base"
                        } inline text-blue-600`}
                      />
                    )}
                  {cell.type === "string" &&
                    sort &&
                    filter.includes(cell.code) &&
                    order === "dsc" && (
                      <BsSortAlphaDown
                        className={`${
                          props.textSize ? props.textSize : "text-base"
                        }   inline text-blue-600 `}
                      />
                    )}
                  {cell.type === "number" && !filter.includes(cell.code) && (
                    <BiSortAlt2
                      className={`${
                        props.textSize ? props.textSize : "text-base"
                      }   inline text-gray-400 group-hover:text-blue-600`}
                    />
                  )}
                  {cell.type === "number" &&
                    sort &&
                    filter.includes(cell.code) &&
                    !prev && (
                      <BsSortNumericDownAlt
                        className={`${
                          props.textSize ? props.textSize : "text-base"
                        } inline text-blue-600`}
                      />
                    )}
                  {cell.type === "number" &&
                    sort &&
                    filter.includes(cell.code) &&
                    prev && (
                      <BsSortNumericDown
                        className={`${
                          props.textSize ? props.textSize : "text-base"
                        } inline text-blue-600`}
                      />
                    )}

                  {cell.type === "date" && !filter.includes(cell.code) && (
                    <BiSortAlt2
                      className={`${
                        props.textSize ? props.textSize : "text-base"
                      } inline text-gray-400 group-hover:text-blue-600`}
                    />
                  )}
                  {cell.type === "date" &&
                    sort &&
                    filter.includes(cell.code) &&
                    order === "asc" && (
                      <BsSortDown
                        className={`${
                          props.textSize ? props.textSize : "text-base"
                        } inline text-blue-600`}
                      />
                    )}
                  {cell.type === "date" &&
                    sort &&
                    filter.includes(cell.code) &&
                    order === "dsc" && (
                      <BsSortDownAlt
                        className={`${
                          props.textSize ? props.textSize : "text-base"
                        } inline text-blue-600`}
                      />
                    )}
                </th>
              );
            })}

          {props.tableActionHeader && (
            <th
              className={` ${
                props.textSize ? props.textSize : "text-xs"
              }  py-3  text-gray-600 dark:text-darkmodeFots text-center tracking-wider font-medium select-none cursor-pointer `}
            >
              Action
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {!sort && !props.search
          ? props.mappingDataArray &&
            props.mappingDataArray.length > 0 &&
            props.mappingDataArray.map((all, index) => {
              return (
                <tr
                  key={index}
                  className="pl-6 even:bg-gray-100 dark:bg-darkmodeSecoundry "
                >
                  {props.tableHeaderArray.map((tableData, index) => {
                    if (tableData.formatFunction === "formatDate") {
                      return (
                        <td
                          key={index}
                          title={formatTime(all[tableData.code])}
                          className="pl-6 font-normal  text-gray-700  text-xs py-2 dark:text-darkmodeFots"
                        >
                          {formateDate(all[tableData.code])}
                        </td>
                      );
                    }

                    if (tableData.formatFunction === "formatTime") {
                      return (
                        <td
                          key={index}
                          className="pl-6 font-normal  text-gray-700  text-xs py-2 dark:text-darkmodeFots"
                        >
                          {formatTime(all[tableData.code])}
                        </td>
                      );
                    }
                    if (tableData.formatFunction === "smallString") {
                      return (
                        <td
                          key={index}
                          className="pl-6  text-slate-600 font-medium text text-xs py-2 dark:text-darkmodeFots"
                        >
                          {smallString(
                            all[tableData.code],
                            tableData.stringClip
                          )}
                        </td>
                      );
                    }
                    if (tableData.link) {
                      return (
                        <Link
                          key={index}
                          to={`${tableData.href}/${all[tableData.code]}`}
                        >
                          <td className="pl-6  text-blue-600 font-medium text text-xs py-2 dark:text-darkmodeFots">
                            {all[tableData.code]}
                          </td>
                        </Link>
                      );
                    }
                    if (all[tableData.code] === "active") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-green-500 text-white capitalize rounded-md">
                            {all[tableData.code]}
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "Y") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-green-500 text-white capitalize rounded-md">
                            Active
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "Add") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-green-500 text-white capitalize rounded-md">
                            Add
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "R") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-gray-500 text-white capitalize rounded-md">
                            Requested
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "N") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-red-500 text-white capitalize rounded-md">
                            Rejected
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "Withdraw") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-red-500 text-white capitalize rounded-md">
                            Withdraw
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "inactive") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-red-500 text-white capitalize rounded-md">
                            {all[tableData.code]}
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "Rejected") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-red-500 text-white capitalize rounded-md">
                            {all[tableData.code]}
                          </span>
                        </td>
                      );
                    }
                    return (
                      <td
                        key={index}
                        className={` font-normal ${
                          tableData.textCenter ? "text-center" : "pl-6"
                        } text-gray-700  text-xs py-2 dark:text-darkmodeFots`}
                      >
                        {all[tableData.code]}
                      </td>
                    );
                  })}
                  {props.tableActionHeader && (
                    <ActionIcons
                      hideDeleteIcon={props.hideDeleteIcon}
                      hideUpdateIcon={props.hideUpdateIcon}
                      updateLinkString={props.updateLinkString}
                      updateLinkTerm={
                        props.updateLinkTerm === "id" ? all.username : all.slug
                      }
                      deleteLinkString={props.deleteLinkString}
                      deleteLinkTerm={
                        props.deleteLinkTerm === "id" ? all._id : all.slug
                      }
                    />
                  )}
                </tr>
              );
            })
          : props.search
          ? props.searchArray &&
            props.searchArray.length > 0 &&
            props.searchArray.map((all, index) => {
              return (
                <tr
                  key={index}
                  className="pl-6 even:bg-gray-100 dark:bg-darkmodeSecoundry "
                >
                  {props.tableHeaderArray.map((tableData, index) => {
                    if (tableData.formatFunction === "formatDate") {
                      return (
                        <td
                          key={index}
                          title={formatTime(all[tableData.code])}
                          className="pl-6 font-normal  text-gray-700  text-xs py-2 dark:text-darkmodeFots"
                        >
                          {formateDate(all[tableData.code])}
                        </td>
                      );
                    }

                    if (tableData.formatFunction === "formatTime") {
                      return (
                        <td
                          key={index}
                          className="pl-6 font-normal  text-gray-700  text-xs py-2 dark:text-darkmodeFots"
                        >
                          {formatTime(all[tableData.code])}
                        </td>
                      );
                    }
                    if (tableData.formatFunction === "smallString") {
                      return (
                        <td
                          key={index}
                          className="pl-6  text-slate-600 font-medium text text-xs py-2 dark:text-darkmodeFots"
                        >
                          {smallString(
                            all[tableData.code],
                            tableData.stringClip
                          )}
                        </td>
                      );
                    }
                    if (tableData.link) {
                      return (
                        <Link key={index} to={tableData.href}>
                          <td className="pl-6  text-blue-600 font-medium text text-xs py-2 dark:text-darkmodeFots">
                            {all[tableData.code]}
                          </td>
                        </Link>
                      );
                    }
                    if (all[tableData.code] === "active") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-green-500 text-white capitalize rounded-md">
                            {all[tableData.code]}
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "Y") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-green-500 text-white capitalize rounded-md">
                            Active
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "Add") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-green-500 text-white capitalize rounded-md">
                            Add
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "R") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-gray-500 text-white capitalize rounded-md">
                            Requested
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "N") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-red-500 text-white capitalize rounded-md">
                            Rejected
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "Withdraw") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-red-500 text-white capitalize rounded-md">
                            Withdraw
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "inactive") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-red-500 text-white capitalize rounded-md">
                            {all[tableData.code]}
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "Rejected") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-red-500 text-white capitalize rounded-md">
                            {all[tableData.code]}
                          </span>
                        </td>
                      );
                    }
                    return (
                      <td
                        key={index}
                        className={` font-normal ${
                          tableData.textCenter ? "text-center" : "pl-6"
                        } text-gray-700  text-xs py-2 dark:text-darkmodeFots`}
                      >
                        {all[tableData.code]}
                      </td>
                    );
                  })}
                  {props.tableActionHeader && (
                    <ActionIcons
                      hideUpdateIcon={props.hideUpdateIcon}
                      updateLinkString={props.updateLinkString}
                      updateLinkTerm={
                        props.updateLinkTerm === "id" ? all._id : all.slug
                      }
                      deleteLinkString={props.deleteLinkString}
                      deleteLinkTerm={
                        props.deleteLinkTerm === "id" ? all._id : all.slug
                      }
                    />
                  )}
                </tr>
              );
            })
          : array &&
            array.length > 0 &&
            array.map((all, index) => {
              return (
                <tr
                  key={index}
                  className="pl-6 even:bg-gray-100 dark:bg-darkmodeSecoundry "
                >
                  {props.tableHeaderArray.map((tableData, index) => {
                    if (tableData.formatFunction === "formatDate") {
                      return (
                        <td
                          key={index}
                          title={formatTime(all[tableData.code])}
                          className="pl-6 font-normal  text-gray-700  text-xs py-2 dark:text-darkmodeFots"
                        >
                          {formateDate(all[tableData.code])}
                        </td>
                      );
                    }

                    if (tableData.formatFunction === "formatTime") {
                      return (
                        <td
                          key={index}
                          className="pl-6 font-normal  text-gray-700  text-xs py-2 dark:text-darkmodeFots"
                        >
                          {formatTime(all[tableData.code])}
                        </td>
                      );
                    }
                    if (tableData.formatFunction === "smallString") {
                      return (
                        <td
                          key={index}
                          className="pl-6  text-slate-600 font-medium text text-xs py-2 dark:text-darkmodeFots"
                        >
                          {smallString(
                            all[tableData.code],
                            tableData.stringClip
                          )}
                        </td>
                      );
                    }
                    if (tableData.link) {
                      return (
                        <Link key={index} to={tableData.href}>
                          <td className="pl-6  text-blue-600 font-medium text text-xs py-2 dark:text-darkmodeFots">
                            {all[tableData.code]}
                          </td>
                        </Link>
                      );
                    }
                    if (all[tableData.code] === "active") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-green-500 text-white capitalize rounded-md">
                            {all[tableData.code]}
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "Y") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-green-500 text-white capitalize rounded-md">
                            Active
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "Add") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-green-500 text-white capitalize rounded-md">
                            Add
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "R") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-gray-500 text-white capitalize rounded-md">
                            Requested
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "N") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-red-500 text-white capitalize rounded-md">
                            Rejected
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "Withdraw") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-red-500 text-white capitalize rounded-md">
                            Withdraw
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "inactive") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-red-500 text-white capitalize rounded-md">
                            {all[tableData.code]}
                          </span>
                        </td>
                      );
                    }
                    if (all[tableData.code] === "Rejected") {
                      return (
                        <td
                          key={index}
                          className="pl-6 text-xs font-normal py-2 dark:text-darkmodeFots"
                        >
                          <span className="px-2 py-1 bg-red-500 text-white capitalize rounded-md">
                            {all[tableData.code]}
                          </span>
                        </td>
                      );
                    }
                    return (
                      <td
                        key={index}
                        className={` font-normal ${
                          tableData.textCenter ? "text-center" : "pl-6"
                        } text-gray-700  text-xs py-2 dark:text-darkmodeFots`}
                      >
                        {all[tableData.code]}
                      </td>
                    );
                  })}
                  {props.tableActionHeader && (
                    <ActionIcons
                      hideUpdateIcon={props.hideUpdateIcon}
                      updateLinkString={props.updateLinkString}
                      updateLinkTerm={
                        props.updateLinkTerm === "id" ? all._id : all.slug
                      }
                      deleteLinkString={props.deleteLinkString}
                      deleteLinkTerm={
                        props.deleteLinkTerm === "id" ? all._id : all.slug
                      }
                    />
                  )}
                </tr>
              );
            })}
        {props.completeReportCalculation && (
          <>
            <tr className="">
              <td className=""></td>
              <td className="text-blue-400">============</td>
              <td className="text-blue-400">============</td>
              <td className="text-blue-400">============</td>
              <td className="text-blue-400">============</td>
              <td className="text-blue-400">============</td>
              <td className="text-blue-400">============</td>
            </tr>
            <tr className="bg-sky-100">
              <td className="pl-3 py-4"></td>
              <td className="pl-3 py-4 ">
                <p className="text-xs  text-gray-800">Total Last Balance</p>
                <p className="text-lg text-green-600">
                  {generalHelpers.sumfromArrayObj(
                    props.dataArray,
                    "lastBalance"
                  )}
                </p>
              </td>
              <td className="pl-3 py-4">
                <p className="text-xs  text-gray-800">Total Deposits</p>
                <p className="text-lg text-green-600">
                  {generalHelpers.sumfromArrayObj(props.dataArray, "deposit")}
                </p>
              </td>
              <td className="pl-3 py-4">
                <p className="text-xs  text-gray-800">Total Bids</p>
                <p className="text-lg text-green-600">
                  {generalHelpers.sumfromArrayObj(props.dataArray, "bidAmount")}
                </p>
              </td>
              <td className="pl-3 py-4 text-red-500">
                <p className="text-xs  text-gray-800">Total Won</p>
                <p className="text-lg text-green-600">
                  {generalHelpers.sumfromArrayObj(props.dataArray, "winAmount")}
                </p>
              </td>
              <td className="pl-3 py-4">
                <p className="text-xs  text-gray-800">Total Withdrawls</p>
                <p className="text-lg text-green-600">
                  {generalHelpers.sumfromArrayObj(
                    props.dataArray,
                    "withdrawnAmount"
                  )}
                </p>
              </td>
              <td className="pl-6 py-4">
                <p className="text-xs  text-gray-800">Total Libilities</p>
                <p className="text-lg text-green-600">
                  {generalHelpers.sumfromArrayObj(
                    props.dataArray,
                    "lastBalance"
                  ) +
                    generalHelpers.sumfromArrayObj(props.dataArray, "deposit") +
                    generalHelpers.sumfromArrayObj(
                      props.dataArray,
                      "winAmount"
                    ) -
                    (generalHelpers.sumfromArrayObj(
                      props.dataArray,
                      "bidAmount"
                    ) +
                      generalHelpers.sumfromArrayObj(
                        props.dataArray,
                        "withdrawnAmount"
                      ))}
                </p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>=========</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <p className="text-xl text-green-600">Total Profit</p>
                <p className="text-xs text-gray-400">Winning-Bidding</p>
              </td>
              <td className="text-2xl text-green-600 font-bold">
                ₹{" "}
                {generalHelpers.sumfromArrayObj(props.dataArray, "winAmount") -
                  generalHelpers.sumfromArrayObj(props.dataArray, "bidAmount")}
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
};

export default DynamicTable;

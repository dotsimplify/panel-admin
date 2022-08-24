import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LiveIcon from "../app/assets/icons/live.png";
import { getAccountValueRequest } from "../features/adminUserSlice";

const Main = () => {
  const dispatch = useDispatch();

  let tradingData = useSelector((state) => state.user.tradingData);
  function isNegative(num) {
    if (Math.sign(num) === -1) {
      return true;
    }

    return false;
  }
  useEffect(() => {
    const intervalId = setInterval(
      () => dispatch(getAccountValueRequest()),
      4000
    );

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="p-4 bg-white mt-4 border border-gray-200 min-h-[20rem]">
      <div className="flex items-center">
        <div>
          <img src={LiveIcon} className="h-8" alt="live icon" />
        </div>
        <h3 className="pl-3 inline text-sm">Trading Data</h3>
      </div>
      <table className="border-collapse table-auto w-full text-sm shadow-sm mt-4">
        <thead>
          <tr>
            <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Balance
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Equity
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Margin
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Profit / Loss
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-800">
          {tradingData && (
            <tr>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                {tradingData.balance}$
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                {tradingData.equity}$
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                {tradingData.margin}$
              </td>
              <td
                className={` border-b border-slate-100 dark:border-slate-700 p-4 pr-8 ${
                  isNegative(tradingData.profitOrLoss)
                    ? "text-red-500"
                    : "text-green-500"
                } `}
              >
                {tradingData.profitOrLoss}$
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Main;

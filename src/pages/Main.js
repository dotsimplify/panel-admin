import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LiveIcon from "../app/assets/icons/live.png";
import { getAccountValueRequest } from "../features/adminUserSlice";

const isWeekendInIndia = () => {
  const currentDate = new Date();
  const currentOffset = currentDate.getTimezoneOffset();
  const ISTOffset = 330; // IST offset UTC +5:30
  const ISTTime = new Date(
    currentDate.getTime() + (ISTOffset + currentOffset) * 60000
  );
  const indiaNow = new Date(ISTTime);
  const monday = indiaNow.getDay() === 1;
  const hours = indiaNow.getHours();
  const minutes1 = indiaNow.getMinutes();
  const HH = hours < 10 ? `0${hours}` : hours;
  const MM = minutes1 < 10 ? `0${minutes1}` : minutes1;
  const currentTimeNow1 = `${HH}:${MM}`;
  return (
    (indiaNow.getDay() === 6 && currentTimeNow1 > "04:30") ||
    indiaNow.getDay() === 0 ||
    (monday && currentTimeNow1 < "04:30")
  );
};

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
    dispatch(getAccountValueRequest());
  }, [dispatch]);
  useEffect(() => {
    const intervalId = setInterval(
      () => dispatch(getAccountValueRequest()),
      120000
    );

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);

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
              Broker Name
            </th>
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
          {tradingData &&
            tradingData.length > 0 &&
            tradingData.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    {item.brokerName}$
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    {item.balance}$
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    {item.equity}$
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    {item.margin}$
                  </td>
                  <td
                    className={` border-b border-slate-100 dark:border-slate-700 p-4 pr-8 ${
                      isNegative(item.profitOrLoss)
                        ? "text-red-500"
                        : "text-green-500"
                    } `}
                  >
                    {isWeekendInIndia ? 0 : item.profitOrLoss}$
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;

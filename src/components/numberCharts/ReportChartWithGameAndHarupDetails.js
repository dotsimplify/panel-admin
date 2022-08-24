import React from "react";
import generalHelpers from "../../utils/helpers/generalHelpers";

const ReportChartWithGameAndHarupDetails = (props) => {
  return (
    <section>
      <table className="w-full">
        <thead>
          <tr>
            <th className="bg-indigo-600 py-2 text-white border w-12"></th>
            <th className="bg-indigo-600 py-2 text-white border">0</th>
            <th className="bg-indigo-600 py-2 text-white border">1</th>
            <th className="bg-indigo-600 py-2 text-white border">2</th>
            <th className="bg-indigo-600 py-2 text-white border">3</th>
            <th className="bg-indigo-600 py-2 text-white border">4</th>
            <th className="bg-indigo-600 py-2 text-white border">5</th>
            <th className="bg-indigo-600 py-2 text-white border">6</th>
            <th className="bg-indigo-600 py-2 text-white border">7</th>
            <th className="bg-indigo-600 py-2 text-white border">8</th>
            <th className="bg-indigo-600 py-2 text-white border">9</th>
            <th className="bg-indigo-600 py-2 text-white">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-indigo-600 py-2 text-white text-center border w-12">
              0
            </td>
            {props.jodi.slice(0, 10).map((single, index) => {
              return (
                <td className="text-center border" key={index}>
                  <p>{single.bidNumber}</p>
                  <p className="text-red-500">{single.value}</p>
                </td>
              );
            })}
            <td className="text-center border text-green-600 text-xl">
              {generalHelpers.sumfromArrayObj(props.jodi.slice(0, 10), "value")}
            </td>
          </tr>
          <tr>
            <td className="bg-indigo-600 py-2 text-white text-center border w-12">
              1
            </td>
            {props.jodi.slice(10, 20).map((single, index) => {
              return (
                <td className="text-center border" key={index}>
                  <p>{single.bidNumber}</p>
                  <p className="text-red-500">{single.value}</p>
                </td>
              );
            })}
            <td className="text-center border text-green-600 text-xl">
              {generalHelpers.sumfromArrayObj(
                props.jodi.slice(10, 20),
                "value"
              )}
            </td>
          </tr>
          <tr>
            <td className="bg-indigo-600 py-2 text-white text-center border w-12">
              2
            </td>
            {props.jodi.slice(20, 30).map((single, index) => {
              return (
                <td className="text-center border" key={index}>
                  <p>{single.bidNumber}</p>
                  <p className="text-red-500">{single.value}</p>
                </td>
              );
            })}
            <td className="text-center border text-green-600 text-xl">
              {generalHelpers.sumfromArrayObj(
                props.jodi.slice(20, 30),
                "value"
              )}
            </td>
          </tr>
          <tr>
            <td className="bg-indigo-600 py-2 text-white text-center border w-12">
              3
            </td>
            {props.jodi.slice(30, 40).map((single, index) => {
              return (
                <td className="text-center border" key={index}>
                  <p>{single.bidNumber}</p>
                  <p className="text-red-500">{single.value}</p>
                </td>
              );
            })}
            <td className="text-center border text-green-600 text-xl">
              {generalHelpers.sumfromArrayObj(
                props.jodi.slice(30, 40),
                "value"
              )}
            </td>
          </tr>
          <tr>
            <td className="bg-indigo-600 py-2 text-white text-center border w-12">
              4
            </td>
            {props.jodi.slice(40, 50).map((single, index) => {
              return (
                <td className="text-center border" key={index}>
                  <p>{single.bidNumber}</p>
                  <p className="text-red-500">{single.value}</p>
                </td>
              );
            })}
            <td className="text-center border text-green-600 text-xl">
              {generalHelpers.sumfromArrayObj(
                props.jodi.slice(40, 50),
                "value"
              )}
            </td>
          </tr>
          <tr>
            <td className="bg-indigo-600 py-2 text-white text-center border w-12">
              5
            </td>
            {props.jodi.slice(50, 60).map((single, index) => {
              return (
                <td className="text-center border" key={index}>
                  <p>{single.bidNumber}</p>
                  <p className="text-red-500">{single.value}</p>
                </td>
              );
            })}
            <td className="text-center border text-green-600 text-xl">
              {generalHelpers.sumfromArrayObj(
                props.jodi.slice(50, 60),
                "value"
              )}
            </td>
          </tr>
          <tr>
            <td className="bg-indigo-600 py-2 text-white text-center border w-12">
              6
            </td>
            {props.jodi.slice(60, 70).map((single, index) => {
              return (
                <td className="text-center border" key={index}>
                  <p>{single.bidNumber}</p>
                  <p className="text-red-500">{single.value}</p>
                </td>
              );
            })}
            <td className="text-center border text-green-600 text-xl">
              {generalHelpers.sumfromArrayObj(
                props.jodi.slice(60, 70),
                "value"
              )}
            </td>
          </tr>
          <tr>
            <td className="bg-indigo-600 py-2 text-white text-center border w-12">
              7
            </td>
            {props.jodi.slice(70, 80).map((single, index) => {
              return (
                <td className="text-center border" key={index}>
                  <p>{single.bidNumber}</p>
                  <p className="text-red-500">{single.value}</p>
                </td>
              );
            })}
            <td className="text-center border text-green-600 text-xl">
              {generalHelpers.sumfromArrayObj(
                props.jodi.slice(70, 80),
                "value"
              )}
            </td>
          </tr>
          <tr>
            <td className="bg-indigo-600 py-2 text-white text-center border w-12">
              8
            </td>
            {props.jodi.slice(80, 90).map((single, index) => {
              return (
                <td className="text-center border" key={index}>
                  <p>{single.bidNumber}</p>
                  <p className="text-red-500">{single.value}</p>
                </td>
              );
            })}
            <td className="text-center border text-green-600 text-xl">
              {generalHelpers.sumfromArrayObj(
                props.jodi.slice(80, 90),
                "value"
              )}
            </td>
          </tr>
          <tr>
            <td className="bg-indigo-600 py-2 text-white text-center border w-12">
              9
            </td>
            {props.jodi.slice(90, 100).map((single, index) => {
              return (
                <td className="text-center border" key={index}>
                  <p>{single.bidNumber}</p>
                  <p className="text-red-500">{single.value}</p>
                </td>
              );
            })}
            <td className="text-center border text-green-600 text-xl">
              {generalHelpers.sumfromArrayObj(
                props.jodi.slice(90, 100),
                "value"
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="py-4 text-center text-xl text-blue-700 bg-gray-100">
        Harup (Andar)
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="bg-sky-600 py-2 text-white border w-12"></th>
            <th className="bg-sky-600 py-2 text-white border">0</th>
            <th className="bg-sky-600 py-2 text-white border">1</th>
            <th className="bg-sky-600 py-2 text-white border">2</th>
            <th className="bg-sky-600 py-2 text-white border">3</th>
            <th className="bg-sky-600 py-2 text-white border">4</th>
            <th className="bg-sky-600 py-2 text-white border">5</th>
            <th className="bg-sky-600 py-2 text-white border">6</th>
            <th className="bg-sky-600 py-2 text-white border">7</th>
            <th className="bg-sky-600 py-2 text-white border">8</th>
            <th className="bg-sky-600 py-2 text-white border">9</th>
            <th className="bg-sky-600 py-2 text-white">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-sky-600 py-2 text-white text-center border w-12"></td>
            {props.andar.map((single, index) => {
              return (
                <td className="text-center border" key={index}>
                  <p className="text-red-500">{single.value}</p>
                </td>
              );
            })}
            <td className="text-center border text-green-600 text-xl">
              {generalHelpers.sumfromArrayObj(props.andar, "value")}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="py-4 text-center text-xl text-blue-700 bg-gray-100">
        Harup (Bahar)
      </div>
      <table className="w-full ">
        <thead>
          <tr>
            <th className="bg-blue-600 py-2 text-white border w-12"></th>
            <th className="bg-blue-600 py-2 text-white border">0</th>
            <th className="bg-blue-600 py-2 text-white border">1</th>
            <th className="bg-blue-600 py-2 text-white border">2</th>
            <th className="bg-blue-600 py-2 text-white border">3</th>
            <th className="bg-blue-600 py-2 text-white border">4</th>
            <th className="bg-blue-600 py-2 text-white border">5</th>
            <th className="bg-blue-600 py-2 text-white border">6</th>
            <th className="bg-blue-600 py-2 text-white border">7</th>
            <th className="bg-blue-600 py-2 text-white border">8</th>
            <th className="bg-blue-600 py-2 text-white border">9</th>
            <th className="bg-blue-600 py-2 text-white">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-sky-600 py-2 text-white text-center border w-12"></td>
            {props.bahar.map((single, index) => {
              return (
                <td className="text-center border" key={index}>
                  <p className="text-red-500">{single.value}</p>
                </td>
              );
            })}
            <td className="text-center border text-green-600 text-xl">
              {generalHelpers.sumfromArrayObj(props.bahar, "value")}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="w-full table-fixed ">
        <thead>
          <tr>
            <th className="bg-blue-600 py-2 text-white border">Total Jodi</th>
            <th className="bg-blue-600 py-2 text-white border">Total Harup</th>
            <th className="bg-blue-600 py-2 text-white">
              Total {props.gameName}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" py-2 text-center border w-12 text-green-600">
              {generalHelpers.sumfromArrayObj(props.jodi, "value")}
            </td>

            <td className="text-center border text-green-600 text-xl">
              {generalHelpers.sumfromArrayObj(props.andar, "value") +
                generalHelpers.sumfromArrayObj(props.bahar, "value")}
            </td>
            <td className="text-center border text-green-600 text-xl">
              {generalHelpers.sumfromArrayObj(props.jodi, "value") +
                generalHelpers.sumfromArrayObj(props.bahar, "value") +
                generalHelpers.sumfromArrayObj(props.andar, "value")}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ReportChartWithGameAndHarupDetails;

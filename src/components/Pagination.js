import React from "react";

const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex flex-col items-center my-4">
      <div className="flex text-gray-700 py-4">
        <div className="h-8 w-8 mr-1 flex justify-center items-center rounded-full dark:hover:bg-gray-700 hover:bg-black hover:text-white dark:text-gray-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left w-6 h-6"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
        <div className="flex h-8 font-medium rounded-full px-4 ">
          {pageNumbers.map((number) => {
            return (
              <div
                key={number}
                onClick={() => props.paginate(number)}
                className="w-8 dark:hover:bg-gray-700 hover:bg-gray-900 hover:text-gray-100 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  bg-gray-700 text-white mx-1"
              >
                {number}
              </div>
            );
          })}
        </div>
        <div className="h-8 w-8 ml-1 flex justify-center items-center rounded-full dark:hover:bg-gray-700 hover:bg-black hover:text-white dark:text-gray-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right w-6 h-6"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

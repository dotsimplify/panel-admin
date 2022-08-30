import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAccountRequest } from "../../features/adminUserSlice";
import MessageModal from "../../shared/loader/MessageModal";
import { setMessage } from "../../features/appSlice";
import axios from "axios";

const CreateAccount = () => {
  const [username, setUsername] = useState([]);
  const [select, setSelected] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.app.message);
  const loading = useSelector((state) => state.app.isLoading);
  const submitError = useSelector((state) => state.user.hasError);

  const clearNotificationMessage = () => {
    dispatch(setMessage(""));
    navigate("/users");
  };

  const onCreate = () => {
    if (!select) return;
    dispatch(createAccountRequest({ username: select }));
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/admin/all-users-list`)
      .then((result) => {
        setUsername(result.data.users);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      {!message ? (
        <div
          style={{ minHeight: "40vh" }}
          className="mt-4   bg-secoundry shadow-dhruv rounded dark:bg-darkmodeSecoundry "
        >
          <div className=" pb-8">
            <h2 className=" font-semibold px-4 text-lg ml-4 pt-4 text-blue-500 dark:text-darkmodeFots ">
              Add New Account
            </h2>
            <div className="p-4 pl-8 pb-0">
              <select
                onChange={(e) => setSelected(e.target.value)}
                className="w-1/3 outline-none border"
              >
                <option>Select User to Add Account With</option>;
                {username &&
                  username.length &&
                  username.map((one, index) => {
                    return <option key={index}>{one.username}</option>;
                  })}
              </select>
            </div>
          </div>
          <div className="px-3 py-4">
            <button
              onClick={onCreate}
              className={` bg-indigo-500 hover:bg-opacity-80 text-sm disabled:bg-gray-400 disabled:text-gray-100 py-2 px-4 rounded text-white mt-4 ml-5 outline-none hover:scale-105 transform`}
            >
              {loading && (
                <svg
                  className="animate-spin  h-5 w-5 mr-3 -ml-2 text-white inline"
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
              )}
              <span>{loading ? "Processing" : "Create Account"}</span>
            </button>
          </div>
          {submitError && (
            <div className="p-3 pl-8 text-red-500">{submitError}</div>
          )}
        </div>
      ) : (
        <MessageModal
          open={message}
          setOpen={clearNotificationMessage}
          message={message}
        />
      )}
    </>
  );
};

export default CreateAccount;

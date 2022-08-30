import React, { useState, useEffect } from "react";
import axios from "axios";
import decode from "jwt-decode";
import Cookie from "js-cookie";
import SideBar from "./SideBar";
import Header from "./Header";
import { setAuthorizationToken } from "../../utils/helpers/setAuthorizationToken";
import { authenticationStatus } from "../../features/loginSlice";
import { userRequest } from "../../features/adminUserSlice";
import { setDropDown, setPills } from "../../features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import AllRoutes from "../routes/AllRoutes";
import { useNavigate } from "react-router-dom";

const Layout = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const userID = useSelector((state) => state.user.userDetails);
  const showDropDown = useSelector((state) => state.app.showDropDown);
  const pillsDropDown = useSelector((state) => state.app.showPills);
  const token = localStorage.getItem("panelToken");
  const refreshToken = Cookie.get("refreshToken");
  const [darkMode, setDarkMode] = useState(false);
  const [show, setShow] = useState(true);
  const [profileDropDown, setProfileDropDown] = useState(false);

  const darkModeHandler = () => {
    const root = window.document.documentElement; //add 'dark class to html root element'
    root.classList.toggle("dark");
    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    if (!token) {
      setAuthorizationToken(false);
      dispatch(authenticationStatus(false));
      navigate("/");
      return;
    }
    if (token) {
      const decodedToken = decode(token);
      if (!decodedToken) {
        localStorage.removeItem("panelToken");
        setAuthorizationToken(false);
        navigate("/");
        return;
      }
      if (decodedToken.exp > Date.now() / 1000) {
        setAuthorizationToken(JSON.parse(token));
        dispatch(authenticationStatus(true));
        !userID._id && dispatch(userRequest());
        return;
      } else {
        axios
          .post(`${process.env.REACT_APP_BASE_URL}/admin/refresh-token`, {
            rf_token: refreshToken,
          })
          .then((result) => {
            let newAccessToken = result.data.accessToken;
            localStorage.setItem("panelToken", JSON.stringify(newAccessToken));
            Cookie.set("refreshToken", result.data.refreshToken, {
              expires: 30,
            });
            setAuthorizationToken(newAccessToken);
            dispatch(userRequest());
            dispatch(authenticationStatus(true));
          })
          .catch((err) => {
            console.log("error while generating new refresh token");
            console.log(err.message);
            console.log("removing token because axios request failed");
            localStorage.removeItem("adminToken");
            setAuthorizationToken(false);
            navigate("/");
          });
      }
    }
  }, []);

  const dropDownHide = () => {
    profileDropDown && setProfileDropDown(false);
    showDropDown && dispatch(setDropDown(false));
    pillsDropDown && dispatch(setPills(false));
  };
  return (
    <main
      onClick={dropDownHide}
      className="bg-primary dark:bg-darkmodePrimary max-w-8xl mx-auto container"
    >
      {isAuthenticated && (
        <SideBar
          darkMode={darkMode}
          show={show}
          toggleSidebar={() => {
            setShow((prev) => !prev);
          }}
        />
      )}
      {isAuthenticated ? (
        <div className={` ${show ? "ml-[9.4rem] mr-2" : "ml-[4.2rem] mr-2"} `}>
          <Header
            darkMode={darkMode}
            profileDropDown={profileDropDown}
            setProfileDropDown={setProfileDropDown}
            show={show}
            darkModeHandler={darkModeHandler}
          />

          <div
            style={{
              width: !show ? "ml-[9.4rem] mr-2" : "ml-[4.2rem] mr-2",
            }}
            className={`dark:bg-darkmodePrimary bg-primary pb-4 mx-auto min-h-screen  `}
          >
            <AllRoutes show={show} />
          </div>
        </div>
      ) : (
        <AllRoutes show={show} />
      )}
    </main>
  );
};

export default Layout;

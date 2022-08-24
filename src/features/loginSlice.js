import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { adminAPI } from "../api/adminAPI";
import { setAuthorizationToken } from "../utils/helpers/setAuthorizationToken";
import { userRequest } from "./adminUserSlice";

// async thunk request to get calls list
export const adminloginRequest = createAsyncThunk(
  "login/adminloginRequest",
  async (userdata, { dispatch, rejectWithValue }) => {
    try {
      const data = await adminAPI.loginRequest(userdata);
      if (data.accessToken) {
        setAuthorizationToken(data.accessToken);
        localStorage.setItem("panelToken", JSON.stringify(data.accessToken));
        Cookies.set("refreshToken", data.refreshToken, { expires: 30 });
        dispatch(authenticationStatus(true));
        dispatch(userRequest());
        dispatch(appLoading(false));
      }
    } catch (error) {
      dispatch(appLoading(false));
      if (error.response) {
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);

export const adminlogoutRequest = createAsyncThunk(
  "login/adminlogoutRequest",
  async (userdata, { dispatch, rejectWithValue }) => {
    try {
      await adminAPI.logoutCall();
    } catch (error) {
      if (error.response) {
        dispatch(appLoading(false));
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);
const initialState = {
  isLoading: false,
  isAuthenticated: false,
  hasError: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    authenticationStatus: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    appLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.hasError = "";
    },
  },
  extraReducers: {
    [adminloginRequest.rejected]: (state, action) => {
      state.hasError = action.payload;
    },
  },
});
export const { appLoading, authenticationStatus, logoutUser } =
  loginSlice.actions;

export default loginSlice.reducer;

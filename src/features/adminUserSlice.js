import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { adminAPI } from "../api/adminAPI";
import { appLoading, setMessage } from "./appSlice";
// async thunk request to get calls list
export const userRequest = createAsyncThunk(
  "user/userRequest",
  async (userdata, { dispatch, rejectWithValue }) => {
    try {
      const data = await adminAPI.getuserRequest();
      dispatch(getUserDetails(data));
    } catch (error) {
      if (error.response) {
        dispatch(appLoading(false));
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);

// async thunk request to get calls list
export const getAccountValueRequest = createAsyncThunk(
  "user/getAccountValueRequest",
  async (userdata, { dispatch, rejectWithValue }) => {
    try {
      const data = await adminAPI.getAccountValue();
      dispatch(getTradingData(data));
    } catch (error) {
      if (error.response) {
        dispatch(appLoading(false));
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);

// async thunk request to get accounts list
export const getAllAccountsRequest = createAsyncThunk(
  "user/getAllAccountsRequest",
  async (userdata, { dispatch, rejectWithValue }) => {
    try {
      const data = await adminAPI.allAccounts();
      dispatch(setAllAccounts(data.accounts));
    } catch (error) {
      if (error.response) {
        dispatch(appLoading(false));
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);

// async thunk request to get single account list
export const getSingleAccountRequest = createAsyncThunk(
  "user/getSingleAccountRequest",
  async (userdata, { dispatch, rejectWithValue }) => {
    try {
      const data = await adminAPI.getSingleAccount(userdata);
      dispatch(setSingleAccount(data.singleAccount));
    } catch (error) {
      if (error.response) {
        dispatch(appLoading(false));
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);

// async thunk request to get single account list
export const updateAccountRequest = createAsyncThunk(
  "user/updateAccountRequest",
  async (userdata, { dispatch, rejectWithValue }) => {
    try {
      dispatch(appLoading(true));
      const data = await adminAPI.updateAccount(userdata);
      dispatch(setMessage(data.message));
      dispatch(appLoading(false));
    } catch (error) {
      dispatch(appLoading(false));
      if (error.response) {
        dispatch(appLoading(false));
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);

const initialState = {
  userDetails: {},
  hasError: "",
  tradingData: {},
  allAccounts: [],
  singleAccount: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    getTradingData: (state, action) => {
      state.tradingData = action.payload;
    },
    setAllAccounts: (state, action) => {
      state.allAccounts = action.payload;
    },
    setSingleAccount: (state, action) => {
      state.singleAccount = action.payload;
    },
    setErrorEmpty: (state) => {
      state.hasError = "";
    },
  },
  extraReducers: {
    [userRequest.rejected]: (state, action) => {
      state.hasError = action.payload;
    },
    [getAccountValueRequest.rejected]: (state, action) => {
      state.hasError = action.payload;
    },
    [getAllAccountsRequest.rejected]: (state, action) => {
      state.hasError = action.payload;
    },
  },
});
export const {
  getUserDetails,
  setErrorEmpty,
  getTradingData,
  setAllAccounts,
  setSingleAccount,
} = userSlice.actions;

export default userSlice.reducer;

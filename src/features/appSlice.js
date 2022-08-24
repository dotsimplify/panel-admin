import { createSlice } from "@reduxjs/toolkit";
// app slice for loading state and user authentication flag
const initialState = {
  isLoading: false,
  hasError: "",
  searchTerm: "",
  dropdown: false,
  message: "",
  filter: [],
  showDropDown: false,
  showPills: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    appLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setDropDown: (state, action) => {
      state.showDropDown = action.payload;
    },
    setPills: (state, action) => {
      state.showPills = action.payload;
    },
    setError: (state, action) => {
      state.hasError = action.payload;
    },
  },
});
export const {
  loginComplete,
  logOutUser,
  setDropDown,
  appLoading,
  setMessage,
  setPills,
  setError,
} = appSlice.actions;

export default appSlice.reducer;

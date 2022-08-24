import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";
// import userReducer from "../features/userSlice";
import loginReducer from "../features/loginSlice";
import adminReducer from "../features/adminUserSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    login: loginReducer,
    user: adminReducer,
    // appUsers: userReducer,
  },
});

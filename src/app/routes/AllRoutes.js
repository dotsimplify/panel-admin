import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import Login from "../../pages/LoginPages/LoginComp";
import Logout from "../../shared/loader/Logout";
import Main from "../../pages/Main";
import UsersList from "../../pages/users/UsersList";
import UpdateAccount from "../../pages/users/UpdateAccount";
import CreateAccount from "../../pages/users/CreateAccount";
import DeleteAccount from "../../pages/DeleteAccount";

const AllRoutes = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route
        exact
        path="/dashboard"
        element={
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/users"
        element={
          <PrivateRoute>
            <UsersList />
          </PrivateRoute>
        }
      />

      <Route
        exact
        path="/users/create-new-account"
        element={
          <PrivateRoute>
            <CreateAccount />
          </PrivateRoute>
        }
      />

      <Route
        exact
        path="/users/update-account/:id"
        element={
          <PrivateRoute>
            <UpdateAccount />
          </PrivateRoute>
        }
      />

      <Route
        exact
        path="/users/delete-account/:id"
        element={
          <PrivateRoute>
            <DeleteAccount />
          </PrivateRoute>
        }
      />

      <Route exact path="/logout" element={<Logout cancelLink="/" />} />
    </Routes>
  );
};

export default AllRoutes;

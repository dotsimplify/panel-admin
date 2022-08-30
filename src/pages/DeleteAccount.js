import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteAccountRequest } from "../features/adminUserSlice";
import DeleteModal from "../components/DeleteModal";

const DeleteAccount = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const deletemessage = useSelector((state) => state.app.message);

  const deleteF = () => {
    dispatch(deleteAccountRequest(id));
  };

  return (
    <DeleteModal
      message={deletemessage}
      cancelLink="/users"
      deleteFunction={deleteF}
    />
  );
};

export default DeleteAccount;

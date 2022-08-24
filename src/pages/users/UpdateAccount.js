import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getSingleAccountRequest,
  updateAccountRequest,
} from "../../features/adminUserSlice";
import validationSchema from "../../utils/validations/validationSchemas";
import NumberInput from "../../components/NumberInput";
import CustomBtn from "../../components/CustomBtn";
import MessageModal from "../../shared/loader/MessageModal";
import { setMessage } from "../../features/appSlice";

const UpdateAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const singleAccount = useSelector((state) => state.user.singleAccount);
  const message = useSelector((state) => state.app.message);
  const loading = useSelector((state) => state.app.isLoading);
  const submitError = useSelector((state) => state.user.hasError);

  const clearNotificationMessage = () => {
    dispatch(setMessage(""));
    navigate("/users");
  };

  const onCreate = (values) => {
    console.log(singleAccount._id, "id");
    let dataWithId = { ...values, username: singleAccount.username };
    console.log(dataWithId, "datewithid");
    dispatch(updateAccountRequest(dataWithId));
  };

  useEffect(() => {
    dispatch(getSingleAccountRequest(id));
  }, [dispatch, id]);

  return (
    <>
      {!message ? (
        <div
          style={{ minHeight: "80vh" }}
          className="mt-4   bg-secoundry shadow-dhruv rounded dark:bg-darkmodeSecoundry "
        >
          <div className=" pb-8">
            <h2 className=" font-semibold px-4 text-lg ml-4 pt-4 text-blue-500 dark:text-darkmodeFots ">
              Update Account
            </h2>
            <Formik
              enableReinitialize
              initialValues={{
                balance: singleAccount.balance ? singleAccount.balance : "",
                usedMargin: singleAccount.usedMargin
                  ? singleAccount.usedMargin
                  : "",
                profitOrLossMin: singleAccount.profitOrLossMin
                  ? singleAccount.profitOrLossMin
                  : "",
                profitOrLossMax: singleAccount.profitOrLossMax
                  ? singleAccount.profitOrLossMax
                  : "",
              }}
              validationSchema={validationSchema.updateAccountValidation}
              onSubmit={onCreate}
            >
              {({ errors, touched }) => (
                <Form autoComplete="off">
                  <div className={`flex justify-start items-center pt-4 px-4`}>
                    <div className={`px-4 w-1/4`}>
                      <NumberInput
                        errors={errors.balance}
                        touched={touched.balance}
                        title="Enter Balance"
                        name="balance"
                        placeholder="Enter balance"
                      />
                    </div>
                    <div className={`px-4 w-1/4`}>
                      <NumberInput
                        errors={errors.usedMargin}
                        touched={touched.usedMargin}
                        title="Enter Margin"
                        name="usedMargin"
                        placeholder="Enter Margin"
                      />
                    </div>
                    <div className={`px-4 w-1/4`}>
                      <NumberInput
                        errors={errors.profitOrLossMin}
                        touched={touched.profitOrLossMin}
                        title="Enter Minimum Profit or Loss"
                        name="profitOrLossMin"
                        placeholder="Enter Min Profit or Loss"
                      />
                    </div>
                    <div className={`px-4 w-1/4`}>
                      <NumberInput
                        errors={errors.profitOrLossMax}
                        touched={touched.profitOrLossMax}
                        title="Enter Maximum Profit or Loss"
                        name="profitOrLossMax"
                        placeholder="Enter Maximum Profit or Loss"
                      />
                    </div>
                  </div>

                  <div className="px-3 py-4">
                    <CustomBtn
                      type="submit"
                      text="Click to Update"
                      loading={loading}
                    />
                  </div>
                  {submitError && (
                    <div className="p-3 pl-8 text-red-500">{submitError}</div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
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

export default UpdateAccount;

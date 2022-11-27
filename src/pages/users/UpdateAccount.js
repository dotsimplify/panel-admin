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
import CustomInput from "../../components/CustomInput";
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
    let dataWithId = { ...values, id: singleAccount._id };
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
                balance: singleAccount.balance ? singleAccount.balance : 0,
                brokerName: singleAccount.brokerName
                  ? singleAccount.brokerName
                  : "",
                usedMargin: singleAccount.usedMargin
                  ? singleAccount.usedMargin
                  : 0,
                profitOrLossMin: singleAccount.profitOrLossMin
                  ? singleAccount.profitOrLossMin
                  : 0,
                profitOrLossMax: singleAccount.profitOrLossMax
                  ? singleAccount.profitOrLossMax
                  : 0,
                oiBal: singleAccount.oiBal ? singleAccount.oiBal : 0,
              }}
              validationSchema={validationSchema.updateAccountValidation}
              onSubmit={onCreate}
            >
              {({ errors, touched }) => (
                <Form autoComplete="off">
                  <div className={`flex justify-start items-center pt-4 px-4`}>
                    <div className={`px-4 w-1/4`}>
                      <CustomInput
                        errors={errors.brokerName}
                        touched={touched.brokerName}
                        title="Enter Broker Name"
                        name="brokerName"
                        placeholder="Enter Broker Name"
                      />
                    </div>
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
                        title="Min Profit or Loss"
                        name="profitOrLossMin"
                        placeholder="Min Profit or Loss"
                      />
                    </div>
                    <div className={`px-4 w-1/4`}>
                      <NumberInput
                        errors={errors.profitOrLossMax}
                        touched={touched.profitOrLossMax}
                        title="Max Profit or Loss"
                        name="profitOrLossMax"
                        placeholder="Max Profit or Loss"
                      />
                    </div>
                    <div className={`px-4 w-1/4`}>
                      <NumberInput
                        errors={errors.oiBal}
                        touched={touched.oiBal}
                        title="Weekend P/L"
                        name="oiBal"
                        placeholder="Enter P/L"
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

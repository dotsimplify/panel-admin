import React, { useEffect } from "react";
import loginImage from "../../app/assets/images/login.svg";
import { MdWarning } from "react-icons/md";
import logo from "../../app/assets/images/LightLogo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminloginRequest, appLoading } from "../../features/loginSlice";
import { Formik, Field, Form } from "formik";
import validationSchemas from "../../utils/validations/validationSchemas";

const LoginComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const errorMessage = useSelector((state) => state.login.hasError);
  const loading = useSelector((state) => state.login.isLoading);
  const onSubmit = (values, { resetForm }) => {
    dispatch(appLoading(true));
    dispatch(adminloginRequest(values));
    resetForm({ values: "" });
  };

  useEffect(() => {
    isAuthenticated && navigate("dashboard");
  }, [isAuthenticated, navigate]);

  return (
    <section style={{ height: "97vh" }}>
      <div className="px-6 h-full text-gray-800 container mx-auto">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src={loginImage}
              className="w-full max-h-screen"
              alt="login with password"
            />
          </div>
          <div className="xl:ml-20 xl:w-4/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 lg:self-center">
            <div className={`mb-8 flex items-center`}>
              <div>
                <img src={logo} className="w-7" alt="Company Logo" />
              </div>
              <h1 className="text-gray-600 text-xl pl-4">Admin Panel</h1>
            </div>
            {errorMessage && (
              <div className="mb-4 text-red-500 flex justify-start items-center ml-1 text-sm">
                <MdWarning className="mr-1" />
                <div>{errorMessage}</div>
              </div>
            )}
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchemas.loginSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div
                    className={`${
                      errors.email && touched.email ? "mb-3" : "mb-6"
                    }`}
                  >
                    <Field
                      className={`${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-gray-300"
                      } form-control text-base block w-full px-4 py-2  font-normal text-gray-700 bg-white bg-clip-padding border border-solid  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                      name="email"
                      placeholder="Email address"
                    />
                    {errors.email && touched.email ? (
                      <div className="mt-2 text-red-500 flex justify-start items-center ml-1 text-sm">
                        <MdWarning className="mr-1" />
                        {errors.email}
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <Field
                      type="password"
                      className={`${
                        errors.password && touched.password
                          ? "border-red-500"
                          : "border-gray-300"
                      } form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  {errors.password && touched.password ? (
                    <div className="my-2 text-red-500 flex justify-start items-center ml-1 text-sm">
                      <MdWarning className="mr-1" />
                      {errors.password}
                    </div>
                  ) : null}

                  <div className="text-center lg:text-left lg:mt-6">
                    <button
                      disabled={loading}
                      type="submit"
                      className="inline-block disabled:bg-gray-400  px-8 py-3 bg-blue-600 text-white font-medium text-xs leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
                      <span>{loading ? "Processing" : "Login"}</span>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComp;

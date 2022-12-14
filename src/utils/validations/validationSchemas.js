import * as yup from "yup";

const validationSchemas = {
  updateAccountValidation: yup.object({
    balance: yup.number().required("balance is required"),
    brokerName: yup.string().required("Broker Name is required"),
    usedMargin: yup.number().required("Margin is required"),
    profitOrLossMin: yup.number().required("Minimum Profit / Loss is required"),
    profitOrLossMax: yup.number().required("Maximum Profit / Loss is required"),
    oiBal: yup.number().required("Please set Weekend Balance"),
  }),
};

export default validationSchemas;

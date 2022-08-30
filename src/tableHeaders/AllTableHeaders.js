const allTableHeaders = {
  usersTableHeader: [
    {
      name: "Username",
      code: "username",
      type: "string",
      formatFunction: "smallString",
      stringClip: "20",
      textHighlight: true,
    },
    {
      name: "Broker Name",
      code: "brokerName",
      type: "string",
    },
    {
      name: "Balance",
      code: "balance",
      type: "number",
    },
    {
      name: "Margin",
      code: "usedMargin",
      type: "number",
    },
    {
      name: "P/L (Min)",
      code: "profitOrLossMin",
      type: "number",
    },

    {
      name: "P/L (Max)",

      code: "profitOrLossMax",
      type: "number",
    },
    {
      name: "Created On",
      code: "createdAt",
      type: "date",
      formatFunction: "formatDate",
    },
  ],
};

export default allTableHeaders;

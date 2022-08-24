import axios from "axios";

const baseURL = `${process.env.REACT_APP_BASE_URL}/admin`;

export const adminAPI = {
  loginRequest: async (adminData) => {
    return axios.post(`${baseURL}/login`, adminData).then((res) => res.data);
  },
  logoutCall: async () => {
    return axios.get(`${baseURL}/logout`).then((res) => res.data);
  },
  getuserRequest: async () => {
    return axios.get(`${baseURL}/getuser`).then((res) => res.data);
  },
  getAccountValue: async () => {
    return axios.get(`${baseURL}/live-account-value`).then((res) => res.data);
  },
  allAccounts: async () => {
    return axios.get(`${baseURL}/get-all-accounts`).then((res) => res.data);
  },
  getSingleAccount: async (id) => {
    return axios
      .get(`${baseURL}/get-account-detail/${id}`)
      .then((res) => res.data);
  },
  updateAccount: async (details) => {
    const { username, ...rest } = details;
    return axios
      .put(`${baseURL}/update-account/${username}`, rest)
      .then((res) => res.data);
  },
};

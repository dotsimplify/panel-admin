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
    const { id, ...rest } = details;
    return axios
      .put(`${baseURL}/update-account/${id}`, rest)
      .then((res) => res.data);
  },
  createAccount: async (user) => {
    return axios
      .post(`${baseURL}/create-new-account`, user)
      .then((res) => res.data);
  },
  deleteAccount: async (id) => {
    return axios.get(`${baseURL}/delete-account/${id}`).then((res) => res.data);
  },
};

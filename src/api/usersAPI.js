import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const usersAPI = {
  usersInLast24Hours: async () => {
    return axios
      .get(`${baseURL}/user/new-users-in-last-24-hrs`)
      .then((res) => res.data);
  },
  getAllUsersWithoutPassword: async () => {
    return axios
      .get(`${baseURL}/user/list-all-users-without-password`)
      .then((res) => res.data);
  },
  verifiedUserCountRequest: async () => {
    return axios
      .get(`${baseURL}/user/total-verified-users-count`)
      .then((res) => res.data);
  },
  allUserCountRequest: async () => {
    return axios
      .get(`${baseURL}/user/total-users-count`)
      .then((res) => res.data);
  },
  availableUsername: async (username) => {
    return await axios
      .post(`${baseURL}/user/available-username`, username)
      .then((res) => res.data);
  },
  getUserRoles: async () => {
    return await axios.get(`${baseURL}/user-roles`).then((res) => res.data);
  },
  verifyUser: async (username) => {
    return axios
      .post(`${baseURL}/user/verify-user`, username)
      .then((res) => res.data);
  },
  blockUnblockUser: async (userWithStatus) => {
    return axios
      .post(`${baseURL}/user/block-unblock-user`, userWithStatus)
      .then((res) => res.data);
  },
  getAllUsers: async () => {
    return axios.get(`${baseURL}/user/list-all-users`).then((res) => res.data);
  },
  addNewUserByAdmin: async (user) => {
    return await axios
      .post(`${baseURL}/user/add-user`, user)
      .then((res) => res.data);
  },
  updateUserByAdmin: async (user) => {
    let { id, ...rest } = user;
    return await axios
      .put(`${baseURL}/user/update-user-by-admin/${id}`, rest)
      .then((res) => res.data);
  },
  singleUser: async (id) => {
    return await axios
      .get(`${baseURL}/user/single-user-by-admin/${id}`)
      .then((res) => res.data);
  },
  updateUser: async (details) => {
    const { id, ...rest } = details;
    return await axios
      .put(`${baseURL}/users/${id}`, rest)
      .then((res) => res.data);
  },
  deleteUser: async (id) => {
    return await axios
      .delete(`${baseURL}/user/delete-user/${id}`)
      .then((res) => res.data);
  },
};

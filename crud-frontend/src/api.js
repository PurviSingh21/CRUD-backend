import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001", // your backend
});

// Match backend endpoints
export const getUsers = () => API.get("api/user");
export const createUser = (data) => API.post("api/user", data);
export const updateUser = (id, data) => API.put(`api/user/${id}`, data);
export const deleteUser = (id) => API.delete(`api/user/${id}`);
export const getUserById = (id) => API.get(`api/user/${id}`);
import axios from "axios";

const API = "http://localhost:5000/api";
// const API = "https://pisync.onrender.com/api";

export const getDevices = async () => {
  const res = await axios.get(`${API}/devices`);
  console.log("get data called");
  return res.data;
};

export const triggerSync = async (id) => {
  await axios.post(`${API}/sync/${id}`);
};

export const getErrors = async () => {
  const res = await axios.get(`${API}/errors`);
  return res.data;
};

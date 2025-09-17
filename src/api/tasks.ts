import axios from "axios";

const API_BASE_URL = "http://your-backend-api.com"; // Replace with your backend URL

export const fetchTasks = async (token: string) => {
  const response = await axios.get(`${API_BASE_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const addTask = async (token: string, task: { title: string; description: string }) => {
  const response = await axios.post(`${API_BASE_URL}/tasks`, task, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

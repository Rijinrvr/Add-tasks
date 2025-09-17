import axios from "axios";

const API_BASE_URL = "http://your-backend-api.com"; // Replace with your backend URL

export const register = async (email: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, { email, password });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
  return response.data;
};

// export const logout = async (token: string) => {
//   const response = await axios.post(
//     `${API_BASE_URL}/auth/logout`,
//     {},
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   return response.data;
// };

import axios from "axios";

const API_URL = 'https://backend.elavarasan.me';


// Get all data
export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
};


// // post all data to server
// export const createUser = async (userData) => {
//   try {
//     // console.log("this send", userData);
//     const response = await axios.post(`${API_URL}/users`, userData,{
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error(" creating err :", error);
//     throw error;
//   }
// };
 
// // Update user data
// export const updateUser = async (id, userData) => {
//   console.log(userData);
//   try {
//     const response = await axios.put(`${API_URL}/users/${id}`, userData);
//     return response.data;
//   } catch (error) {
//     console.error(`Error updating user with id ${id}:`, error);
//     throw error;
//   }
// };


// // remove user data
// export const deleteUser = async (id) => {
//   try {
//     const response = await axios.delete(`${API_URL}/users/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`remove usr err`, error);
//     throw error;
//   }
// };

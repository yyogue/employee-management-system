import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_URL,
});


export const addEmployee = async (employeeData) => {
  console.log('Sending data to API:', employeeData); // Log data before sending
  const response = await api.post('/personnel/ajout', employeeData);
  return response.data;
};



export const login = (email, motDePasse) => api.post('/admin/connecter', { email, motDePasse }); // Ensure 'motDePasse' matches backend
export const getAllAdmins = () => api.get('/admin/all'); // Fetch all admins
export const getAllEmployees = () => api.get('/personnel'); // Fetch all personnel
// export const addEmployee = (employeeData) => api.post('/personnel/ajout', employeeData); // Add new personnel
export const updateEmployee = (employeeId, employeeData) => api.put(`/personnel/update/${employeeId}`, employeeData); // Update personnel
export const deleteEmployee = (employeeId) => api.delete(`/personnel/retire/${employeeId}`); // Delete personnel

export default api;

import axios from "axios";
const apiClient = axios.create({
    baseURL: 'https://palate-pilot-backend.onrender.com', // Update with your backend's Render URL
  });
  export default apiClient;

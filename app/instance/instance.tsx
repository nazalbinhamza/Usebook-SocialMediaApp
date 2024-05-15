import axios from "axios";

const adminToken = localStorage.getItem('token')

const instance = axios.create({
  baseURL:  "https://social-media-5ukj.onrender.com"
  
 

});
console.log(instance);




instance.interceptors.request.use(
  (request) => {
    console.log(request);
    if (adminToken) {
      request.headers.Authorization = `Bearer ${adminToken}`;
    }
    return request; // Return the modified request
  },
  (error) => {
    // Handle errors here
    return Promise.reject(error);
  }
);

export default instance;
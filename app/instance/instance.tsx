import axios from "axios";

const adminToken = typeof localStorage !== 'undefined' ? localStorage.getItem("token") : null

const instance = axios.create({
  baseURL:  process.env.NEXT_PUBLIC_HOST_URL
  
 

});
console.log(process.env.NEXT_PUBLIC_HOST_URL);





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

// httpService.ts
import axios from "axios";

// Set up the base URL for your API
const baseURL = "https://api.example.com";

// Create an instance of Axios with a custom config
const httpService = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${''}`, // Handle get token here
  },
});

// Interceptors are optional

// Adding a request interceptor
// This part can already be done above
httpService.interceptors.request.use(
  (config) => {
    // Add headers, authentication, etc.
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Adding a response interceptor
httpService.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle errors
    // Should not handle popup of errors in here
    return Promise.reject(error);
  }
);

export default httpService;

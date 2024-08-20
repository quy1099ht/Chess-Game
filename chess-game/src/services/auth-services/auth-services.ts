import httpService from "../http-services/http-services";

const API_URL = "/auth"; // Since baseURL is already set in httpService, we only need the relative path

// User registration
export const register = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const response = await httpService.post(`${API_URL}/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

// User login
export const login = async (email: string, password: string) => {
  try {
    const response = await httpService.post(`${API_URL}/login`, {
      email,
      password,
    });

    // Store the JWT token in local storage
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

// Logout
export const logout = () => {
  localStorage.removeItem("user");
};

// Get the currently authenticated user
export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};

// Get the JWT token
export const getToken = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    const user = JSON.parse(userStr);
    return user?.token;
  }
  return null;
};

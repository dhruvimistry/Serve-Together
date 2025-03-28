import { setAuthData, getAuthToken, clearAuthData } from "./cookies";

export const loginUser = (token: string, userType: string) => {
  setAuthData(token, userType);
};

export const isAuthenticated = () => {
  return !!getAuthToken();
};

export const logoutUser = () => {
  clearAuthData();
};

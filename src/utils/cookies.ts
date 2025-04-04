import Cookies from "js-cookie";

// Set expiration time
export const setAuthData = (token: string, userType: string) => {
  Cookies.set("authToken", token, { expires: 1, secure: true, sameSite: "Strict" });
  Cookies.set("userType", userType, { expires: 1, secure: true, sameSite: "Strict" });
};

// Get auth token
export const getAuthToken = (): string | null => {
  return Cookies.get("authToken") || null;
};

// Get user type
export const getUserType = (): string | null => {
  return Cookies.get("userType") || null;
};

// Set user profile data: needed for edit-profiles
export const setUserData = (userData: object) => {
  Cookies.set("userData", JSON.stringify(userData), { expires: 1, secure: true, sameSite: "Strict" });
};

// Get user profile data
export const getUserData = (): object | null => {
  const data = Cookies.get("userData");
  return data ? JSON.parse(data) : null;
};

// Remove all authentication data for logout
export const clearAuthData = () => {
  Cookies.remove("authToken");
  Cookies.remove("userType");
  Cookies.remove("userData");
};
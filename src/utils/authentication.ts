import Cookies from "js-cookie";

export const loginUser = (token: string) => {
  Cookies.set("authToken", token, { expires: 1, secure: true, sameSite: "Strict" });
};

export const isAuthenticated = () => {
  return !!Cookies.get("authToken");
};

export const logoutUser = () => {
  Cookies.remove("authToken");
};

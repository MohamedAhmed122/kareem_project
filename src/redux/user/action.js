import { type } from "./type";

export const loginUser = (value) => {
  return { type: type.USER_LOGIN, payload: value};
};

export const logoutUser = () => {
  return { type: type.USER_LOGOUT };
};

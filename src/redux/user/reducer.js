import { type } from "./type";

const initialState = {
  isUser: false,
  email: null,
  name: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.USER_LOGIN:
      return {
        isUser: true,
        email: action.payload.email,
        name: action.payload.name,
      };
    case type.USER_LOGOUT:
      return {
        isUser: false,
        email: null,
        name: null,
      };
    default:
      return state;
  }
};

export default userReducer;

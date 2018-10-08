import { createAction } from "redux-actions";
const PREFIX = "AUTH_";
export const Types = {
  SET_TOKEN: PREFIX + "SET_TOKEN",
  SET_TOKEN_EXPIRE: PREFIX + "SET_TOKEN_EXPIRE",
  LOGIN: PREFIX + "LOGIN",
  LOGOUT: PREFIX + "LOGOUT",
  RESET: PREFIX + "RESET"
};
// normal actions
const setToken = createAction(Types.SET_TOKEN);
const setTokenExpire = createAction(Types.SET_TOKEN_EXPIRE);
const reset = createAction(Types.RESET);
// saga actions
const login = createAction(Types.LOGIN);
const logout = createAction(Types.LOGOUT);

export const Actions = {
  setToken,
  setTokenExpire,
  login,
  logout,
  reset
};

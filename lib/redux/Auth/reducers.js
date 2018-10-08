import { handleActions } from "redux-actions";
import Immutable from "seamless-immutable";
import { Types } from "./actions";
export const defaultState = Immutable({
  token: null
});
const setToken = (state, action) => {
  return state.set("token", action.payload);
};
const setTokenExpire = (state, action) => {
  return state.set("tokenExpireIn", action.payload);
};
const reset = () => {
  return defaultState;
};
export default handleActions(
  {
    [Types.SET_TOKEN]: setToken,
    [Types.SET_TOKEN_EXPIRE]: setTokenExpire,
    [Types.RESET]: reset
  },
  defaultState
);

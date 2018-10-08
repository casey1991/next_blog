import { takeEvery, call, put } from "redux-saga/effects";
import { Types, Actions } from "./actions";
import authService from "../../services/APIServices/AuthSerivce";
import { handleResponse } from "../utils";

export const login = function*(action) {
  const response = yield call(authService.login, action.payload);
  function* onSuccess(data) {
    const token = data.access_token;
    const expiresIn = data.expires_in;
    yield put(Actions.setToken(token));
    yield put(Actions.setTokenExpire(expiresIn));
  }
  function* onFailed(data) {}
  yield handleResponse(response)(onSuccess, onFailed);
};
export const logout = function*() {
  // now just reset state
  yield put(Actions.reset());
};
export default function*() {
  yield takeEvery(Types.LOGIN, login);
  yield takeEvery(Types.LOGOUT, logout);
}

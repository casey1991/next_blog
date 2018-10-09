import { all } from "redux-saga/effects";
import Auth from "./Auth/sagas";

function* rootSaga() {
  yield all([Auth()]);
}

export default rootSaga;

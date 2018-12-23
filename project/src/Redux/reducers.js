import { combineReducers } from "redux";
import page from "./Page/reducer";
import app from "./App/reducer";
const reducers = combineReducers({
  app,
  page
});
export default reducers;

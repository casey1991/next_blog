import { handleAction } from "redux-actions";
import Immutable from "seamless-immutable";
import { Actions } from "./actions";

const defaultState = Immutable({
  menus: [
    { name: "Home", path: "/" },
    { name: "Cattery", path: "/cattery" },
    { name: "Others", path: "/others" }
  ]
});
const reducer = handleAction(
  Actions.reset,
  (state, action) => {
    return defaultState;
  },
  defaultState
);
export default reducer;

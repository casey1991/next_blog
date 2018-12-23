import { handleAction } from "redux-actions";
import Immutable from "seamless-immutable";
import { Actions } from "./actions";

const defaultState = Immutable({
  common: {
    sideBarVisible: false
  }
});
const reducer = handleAction(
  Actions.toggleSidebar,
  (state, action) => {
    return Immutable.setIn(
      state,
      ["common", "sideBarVisible"],
      !state.common.sideBarVisible
    );
  },
  defaultState
);
export default reducer;

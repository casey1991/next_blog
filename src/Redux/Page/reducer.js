import { createAction, handleAction } from "redux-actions";

const defaultState = {
  common: {
    sideBarVisible: false
  }
};
const toggleSidebar = createAction("PAGE_TOGGLE_SIDEBAR");
const reducer = handleAction(
  toggleSidebar,
  (state, action) => ({
    ...state
  }),
  defaultState
);
export default reducer;

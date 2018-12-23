import { createAction, handleAction } from "redux-actions";
const Prefix = "PAGE/";
// Types
const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
// Actions
const toggleSidebar = createAction(TOGGLE_SIDEBAR);
export const Types = {
  TOGGLE_SIDEBAR
};
export const Actions = {
  toggleSidebar
};

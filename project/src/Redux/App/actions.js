import { createAction, handleAction } from "redux-actions";
const Prefix = "APP/";
// Types
const RESET = "RESET";
// Actions
const reset = createAction(RESET);
export const Types = {
  RESET
};
export const Actions = {
  reset
};

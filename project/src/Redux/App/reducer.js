import { handleAction } from "redux-actions";
import Immutable from "seamless-immutable";
import { Actions } from "./actions";

const defaultState = Immutable({
  menus: [
    { name: "Home", path: "/" },
    { name: "Cattery", path: "/cattery" },
    { name: "Others", path: "/others" }
  ],
  sidebar: [
    {
      name: "Material System",
      type: "item",
      items: [{ name: "Introduction" }, { name: "Material studies" }]
    },
    {
      type: "divider"
    },
    {
      name: "Material Foundation",
      type: "item",
      items: [
        { name: "Foundation overview", type: "item" },
        { name: "Environment", type: "item" },
        { name: "Layout", type: "item" },
        {
          name: "Navigation",
          type: "item",
          items: [
            { name: "Understanding layout", type: "item" },
            { name: "Density & resolution", type: "item" },
            { name: "Responsive layout grid", type: "item" },
            { name: "Spacing methods", type: "item" },
            { name: "Component behavior", type: "item" },
            { name: "Density", type: "item" }
          ]
        }
      ]
    }
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

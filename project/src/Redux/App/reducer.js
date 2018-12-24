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
      title: "Material System",
      type: "header",
      collapsible: false,
      sections: [
        { title: "Introduction", path: "/cattery/introduction" },
        { title: "Material studies", path: "/cattery/material-studies" }
      ]
    },
    {
      title: "divider1",
      type: "divider"
    },
    {
      title: "Material Foundation",
      type: "header",
      collapsible: false,
      sections: [
        { title: "Foundation overview", type: "item" },
        { title: "Environment", type: "item" },
        { title: "Layout", type: "item" },
        {
          title: "Navigation",
          type: "item",
          open: false,
          sections: [
            { title: "Understanding layout", type: "item" },
            { title: "Density & resolution", type: "item" },
            { title: "Responsive layout grid", type: "item" },
            { title: "Spacing methods", type: "item" },
            { title: "Component behavior", type: "item" },
            { title: "Density", type: "item" }
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

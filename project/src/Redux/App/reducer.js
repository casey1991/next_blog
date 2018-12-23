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
            { title: "Understanding layout", type: "item", level: 2 },
            { title: "Density & resolution", type: "item", level: 2 },
            { title: "Responsive layout grid", type: "item", level: 2 },
            { title: "Spacing methods", type: "item", level: 2 },
            { title: "Component behavior", type: "item", level: 2 },
            { title: "Density", type: "item", level: 2 }
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

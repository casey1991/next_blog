import React from "react";
import { ThemeContext } from "./ThemeProvider";
export const withTheme = Component => props => {
  return (
    <ThemeContext.Consumer>
      {value => <Component theme={value} {...props} />}
    </ThemeContext.Consumer>
  );
};

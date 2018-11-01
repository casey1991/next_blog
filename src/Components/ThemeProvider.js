import React from "react";
import { Colors, Dimensions, Constants } from "../Themes";
const theme = { Colors, Dimensions, Constants };
export const ThemeContext = React.createContext(theme);
// not finished yet
class ThemeProvider extends React.Component {
  _getTheme = (
    outer = { Colors: {}, Dimensions: {}, Constants: {} },
    inner
  ) => {
    return {
      Colors: { ...inner.Colors, ...outer.Colors },
      Dimensions: { ...inner.Dimensions, ...outer.Dimensions },
      Constants: { ...inner.Constants, ...outer.Constants }
    };
  };
  render() {
    if (!this.props.children) return null;
    const context = this._getTheme(this.props.theme, theme);
    return (
      <ThemeContext.Provider value={context}>
        {React.Children.only(this.props.children)}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeProvider;

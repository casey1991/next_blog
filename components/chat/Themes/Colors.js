import Color from "color";
const PRIMARY = "#0CA461";
const PRIMARY_DARK = Color("#219269")
  .alpha(0.7)
  .lighten(0.02);
const PRIMARY_LIGHT = Color(PRIMARY).lighten(0.04);
const BACKGROUND = "#EAEAEA";
export default {
  PRIMARY,
  PRIMARY_DARK,
  PRIMARY_LIGHT,
  BACKGROUND
};

import Color from "color";
const primary = "#6200EE";
const secondary = "#03DAC6";
const accent = "#C51162";
const PRIMARY = Color(primary);
const PRIMARY_VARIANT = PRIMARY.darken(0.24);
const SECONDARY = Color(secondary);
const SECONDARY_VARIANT = SECONDARY.darken(0.24);
const ACCENT = Color(accent);
const ACCENT_VARIANT = accent.darken(0.24);
const BACKGROUND = Color("#FFF");
const TEXT_PRIMARY = Color("#000").alpha(0.87);
const TEXT_SECONDARY = Color("#000").alpha(0.6);
const TEXT_DISABLE = Color("#000").alpha(0.38);
export default {
  PRIMARY,
  PRIMARY_VARIANT,
  SECONDARY,
  SECONDARY_VARIANT,
  ACCENT,
  ACCENT_VARIANT,
  BACKGROUND,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_DISABLE
};

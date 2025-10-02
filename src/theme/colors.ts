import { GradientColors } from "../utils/types/types/gradient-colors.ts";
import { SolidColor } from "../utils/types/types/solid-color.ts";

const palette = {
  primary: "#08184D",
  white: "#FFFFFF",
  black: "#000000",
  lightBlack: "#0A1516",
  cyan: "#173232",
  blue: "#00b0f0",
  purple: "#5B08A4",
  navyBlue: "#001E50",
  iconColor: "#010101",
  linkColor: "#00B0F0",
  lightGray: "#DEE4E8",
  grey: "#8994A0",
  greySecondary: "#98A3A7",

  linearGradientHeaderProfile: [ "#081875","#081861","#08184D" ],
  mainLinearGradient: [ "#384F76", "#001E50" ],
  linearGradientFooter: [ "#00D8F9", "#00B0F0" ]
};

const colors = {
  background: palette.white as SolidColor,
  logo: palette.primary as SolidColor,
  icons: palette.black as SolidColor,
  text: palette.grey as SolidColor,
  textSecondary: palette.greySecondary as SolidColor,
  cardText: palette.lightBlack as SolidColor,
  link: palette.linkColor as SolidColor,
  bellNumber: palette.blue as SolidColor,
  number: palette.purple as SolidColor,
  notificationText: palette.navyBlue as SolidColor
};

const Gradient = {
  header: palette.mainLinearGradient as GradientColors,
  headerProfile: palette.linearGradientHeaderProfile as GradientColors,
  footer: palette.linearGradientFooter as GradientColors
};

const themeColors = {
  colors: colors,
  gradients: Gradient
};

export { colors, Gradient, palette, themeColors };
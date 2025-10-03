import { Platform, ViewProps } from "react-native";

const WEB_A11Y_PROPS = (Platform.OS === "web")
  ? ({ accessibilityRole: "dialog" } as unknown as Pick<ViewProps, "accessibilityRole">)
  : {};

export { WEB_A11Y_PROPS };
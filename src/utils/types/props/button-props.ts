import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  disabled?: boolean;
  text: string;
  width?: number;
};

export type { ButtonProps };
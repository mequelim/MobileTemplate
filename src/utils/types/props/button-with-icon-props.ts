import { ButtonProps } from "./button-props";

type ButtonWithIcon = ButtonProps & {
  iconName: string;
  iconSize: number;
}

export type { ButtonWithIcon };
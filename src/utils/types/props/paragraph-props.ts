import { TextProps } from "react-native";

type ParagraphProps = TextProps & {
  fontSize?: number;
  text: string;
};

export type { ParagraphProps };
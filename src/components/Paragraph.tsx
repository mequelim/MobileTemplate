import React from "react";
import { StyleSheet, Text } from "react-native";

// Types...
import { ParagraphProps } from "../utils/types/props/paragraph-props.ts";

// Colors...
import { colors } from "../theme/colors.ts";

function Paragraph(data: ParagraphProps): React.JSX.Element {
  return <Text style={styles.text}>{data.text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    textAlign: "justify",
    fontSize: 30,
    color: colors.text
  }
});

export { Paragraph };
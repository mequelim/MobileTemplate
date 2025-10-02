import React from "react";
import { StyleSheet, Text } from "react-native";

// Types...
import { ButtonTextProps } from "../utils/types/props/button-text-props.ts";

// Colors...
import { colors } from "../theme/colors.ts";

function ButtonText(props: ButtonTextProps): React.JSX.Element {
  return <Text style={styles.title}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: colors.text
  }
});

export { ButtonText };
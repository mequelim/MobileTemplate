import React from "react";
import { StyleSheet, Text } from "react-native";

// Types...
import { CardTitleProps } from "../utils/types/props/card-title-props";

// Colors...
import { colors } from "../theme/colors";

function CardTitle(props: CardTitleProps): React.JSX.Element {
  return <Text style={styles.title}>{props.title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
    color: colors.text
  }
});

export { CardTitle };
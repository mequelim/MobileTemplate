import React from "react";
import { StyleSheet, View } from "react-native";

// Components...
import { CardTitle } from "./CardTitle";
import { CardDescription } from "./CardDescription";
import { CardProps } from "../utils/types/props/card-props";
import { colors } from "../theme/colors";

function Card(props: CardProps): React.JSX.Element {
  return (
    <View style={styles.wrapper}>
      <CardTitle title={props.title} />
      <CardDescription text="Card Description" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    width: "70%",
    maxWidth: "100%",
    paddingVertical: 25,
    borderRadius: 10,
    backgroundColor: colors.background
  }
});

export { Card };
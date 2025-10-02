import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

// Components...
import { ButtonText } from "./TextButton.tsx";

// Types...
import { ButtonWithIcon } from "../utils/types/props/button-with-icon-props.ts";

// Colors...
import { colors } from "../theme/colors.ts";

// Icons...
import Feather from "@react-native-vector-icons/feather";

function ButtonWithIconAndText(props: ButtonWithIcon): React.JSX.Element {
  const {
    iconName,
    iconSize = 25,
    text,
    width,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.button, {
          width: width ?? styles.button.width
        }
      ]}
    >
      <Feather name={iconName as any} size={iconSize} color={colors.icons} />
      <ButtonText text={text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 55,
    width: 150,
    maxWidth: "100%",
    borderRadius: 10,
    backgroundColor: colors.background
  }
});

export { ButtonWithIconAndText };
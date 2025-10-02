import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

// Components...
import { ButtonText } from "./TextButton.tsx";

// Types...
import { ButtonProps } from "../utils/types/props/button-props.ts";
import { colors } from "../theme/colors.ts";

function PrimaryButton({ text, width, ...rest }: ButtonProps): React.JSX.Element {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.button, {
          width: width ?? styles.button.width
        }
      ]}
    >
      <ButtonText text={text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 150,
    maxWidth: "100%",
    borderRadius: 10,
    backgroundColor: colors.background
  }
});

export { PrimaryButton };
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// Components...
import { Card } from "./Card";

// Constants...
import { mockedCardItems } from "../utils/constants/mocked-card-items";
import { StyleSheet } from "react-native";

function RenderCardItem(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.wrapper}>
      {mockedCardItems.map((item) => (
        <Card key={item.id} title={item.title} description={item.description} />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    width: "100%"
  }
});

export { RenderCardItem };
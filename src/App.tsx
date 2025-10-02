import { StatusBar, StyleSheet, useColorScheme, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Components...
import { Paragraph } from "./components/Paragraph.tsx";

function App(): React.JSX.Element {
  const isDarkMode: boolean = useColorScheme() === "dark";

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={ (isDarkMode) ? "light-content" : "dark-content"} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Paragraph text="Hello World!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15
  }
});

export default App;
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return <WebView source={{ uri: "https://reactnative.dev/" }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

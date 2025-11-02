import React from "react";
import { StyleSheet, View } from "react-native";
import SignInScreen from "./screens/SignInScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

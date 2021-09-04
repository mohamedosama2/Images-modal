import React from "react";
import { StyleSheet, View } from "react-native";
import Pictures from "./Pictures";

export default function App() {
  return (
    <View style={styles.container}>
      <Pictures />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

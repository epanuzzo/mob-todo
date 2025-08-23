import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "../components/atoms/Button/Button";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Hello</Text>
      {/* <Button title="Click me" onPress={() => console.log("Button pressed")} /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

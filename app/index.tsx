import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Button } from "../components/atoms/Button/Button";
import { Input } from "../components/atoms/Input/Input";
import { Box } from "@/components/atoms/Box";
import { Text } from "@/components/atoms/Text";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Box>
        <Text type="largeTitle">Add TODO Item:</Text>
      </Box>
      <Box>
        <Input
          placeholder="Enter your task"
          onChangeText={(text: string) => console.log(text)}
        />
      </Box>
      <Button
        title="Add to do item"
        onPress={() => console.log("Button pressed")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

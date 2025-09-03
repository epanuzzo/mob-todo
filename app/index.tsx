import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Button } from "../components/atoms/Button/Button";
import { Input } from "../components/atoms/Input/Input";
import { Box } from "@/components/atoms/Box";
import { Text } from "@/components/atoms/Text";
import { theme } from "@/constants/theme";
import { ToDoItem } from "@/components/molecules/ToDoItem/ToDoItem";

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
      <View style={styles.todoItemsContainer}>
        <ToDoItem
          text="TODO Item 1"
          onDone={() => console.log("TODO Item 1 done")}
          onEdit={() => console.log("TODO Item 1 edited")}
          onDelete={() => console.log("TODO Item 1 deleted")}
        />
        <ToDoItem
          text="TODO Item 2"
          onDone={() => console.log("TODO Item 2 done")}
          onEdit={() => console.log("TODO Item 2 edited")}
          onDelete={() => console.log("TODO Item 2 deleted")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  todoItemsContainer: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderColor: theme.colors.border,
  },
});

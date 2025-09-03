import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Alert } from "react-native";
import { Button } from "../components/atoms/Button/Button";
import { Input } from "../components/atoms/Input/Input";
import { Box } from "@/components/atoms/Box";
import { Text } from "@/components/atoms/Text";
import { theme } from "@/constants/theme";
import { ToDoItem } from "@/components/molecules/ToDoItem/ToDoItem";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  addTask,
  editTask,
  removeTask,
  toggleComplete,
} from "@/redux/slices/tasksSlice";
import { selectAllTasks } from "@/redux/selectors/tasksSelectors";

export default function HomeScreen() {
  const [inputText, setInputText] = useState("");
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectAllTasks);

  const handleAddTask = () => {
    if (inputText.trim()) {
      dispatch(addTask({ text: inputText }));
      setInputText("");
    }
  };

  const handleToggleComplete = (id: string) => {
    dispatch(toggleComplete({ id }));
  };

  const handleEditTask = (id: string) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      Alert.prompt(
        "Edit Task",
        "Enter new text:",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Save",
            onPress: (text) => {
              if (text && text.trim()) {
                dispatch(editTask({ id, text }));
              }
            },
          },
        ],
        "plain-text",
        task.text
      );
    }
  };

  const handleDeleteTask = (id: string) => {
    dispatch(removeTask({ id }));
  };

  return (
    <ScrollView style={styles.container}>
      <Box>
        <Text type="largeTitle">Add TODO Item:</Text>
      </Box>
      <Box>
        <Input
          placeholder="Enter your task"
          value={inputText}
          onChangeText={setInputText}
        />
      </Box>
      <Button title="Add to do item" onPress={handleAddTask} />
      <View style={styles.todoItemsContainer}>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            text={task.text}
            done={task.completed}
            onDone={() => handleToggleComplete(task.id)}
            onEdit={() => handleEditTask(task.id)}
            onDelete={() => handleDeleteTask(task.id)}
          />
        ))}
        {tasks.length === 0 && (
          <Box gap="m">
            <Text type="body">No tasks yet. Add your first task above!</Text>
          </Box>
        )}
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

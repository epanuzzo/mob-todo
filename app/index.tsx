import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
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
import { textValidationSchema } from "@/utils/validation";

export default function HomeScreen() {
  const [inputText, setInputText] = useState("");
  const [editingTask, setEditingTask] = useState<{
    id: string;
    text: string;
  } | null>(null);
  const [validationError, setValidationError] = useState<string>("");
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectAllTasks);

  const validateInput = (text: string): boolean => {
    try {
      textValidationSchema.validateSync({ text });
      setValidationError("");
      return true;
    } catch (error: any) {
      setValidationError(error.message);
      return false;
    }
  };

  const handleAddTask = () => {
    if (validateInput(inputText)) {
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
      setEditingTask({ id, text: task.text });
      setInputText(task.text);
      setValidationError("");
    }
  };

  const handleSaveEdit = () => {
    if (editingTask && validateInput(inputText)) {
      dispatch(editTask({ id: editingTask.id, text: inputText }));
      setEditingTask(null);
      setInputText("");
    }
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setInputText("");
    setValidationError("");
  };

  const handleDeleteTask = (id: string) => {
    dispatch(removeTask({ id }));
  };

  const handleInputChange = (text: string) => {
    setInputText(text);
    // Clear validation error when user starts typing
    if (validationError) {
      setValidationError("");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Box>
        <Text type="largeTitle">
          {editingTask ? "Edit TODO Item:" : "Add TODO Item:"}
        </Text>
      </Box>
      <Box>
        <Input
          placeholder={editingTask ? "Edit your task" : "Enter your task"}
          value={inputText}
          onChangeText={handleInputChange}
          error={!!validationError}
          errorMessage={validationError}
        />
      </Box>
      {editingTask ? (
        <>
          <Box>
            <Button title="Save" onPress={handleSaveEdit} />
          </Box>
          <Button
            title="Cancel"
            variant="secondary"
            onPress={handleCancelEdit}
          />
        </>
      ) : (
        <Button title="Add to do item" onPress={handleAddTask} />
      )}
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
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderColor: theme.colors.border,
  },
});

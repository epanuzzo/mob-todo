import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  updatedAt?: number;
}

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [] as Task[],
  },
  reducers: {
    addTask: (state, action: PayloadAction<{ text: string }>) => {
      const { text } = action.payload;
      if (text.trim()) {
        const newTask: Task = {
          id: crypto.randomUUID(),
          text: text.trim(),
          completed: false,
          createdAt: Date.now(),
        };
        state.tasks.push(newTask);
      }
    },
    editTask: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const { id, text } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task && text.trim()) {
        task.text = text.trim();
        task.updatedAt = Date.now();
      }
    },
    removeTask: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    toggleComplete: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
        task.updatedAt = Date.now();
      }
    },
  },
});

export const { addTask, editTask, removeTask, toggleComplete } =
  tasksSlice.actions;

export default tasksSlice.reducer;

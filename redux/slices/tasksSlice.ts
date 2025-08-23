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
      if (text) {
        const newTask: Task = {
          id: crypto.randomUUID(),
          text,
          completed: false,
          createdAt: Date.now(),
        };
        state.tasks.push(newTask);
      }
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;

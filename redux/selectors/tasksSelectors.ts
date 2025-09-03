import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export const selectAllTasks = (state: RootState) => state.tasks.tasks;

export const selectTasksCount = createSelector(
  [selectAllTasks],
  (tasks) => tasks.length
);

export const selectCompletedTasksCount = createSelector(
  [selectAllTasks],
  (tasks) => tasks.filter((task) => task.completed).length
);

export const selectActiveTasksCount = createSelector(
  [selectAllTasks],
  (tasks) => tasks.filter((task) => !task.completed).length
);

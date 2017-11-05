import { createSelector } from "reselect";

const getInternsCount = state => state.internsState.count;
const getTasksCount = state => state.tasksState.count;
const getProjectsCount = state => state.projectsState.count;

export const getAllCounts = createSelector(
  [getInternsCount, getTasksCount, getProjectsCount],
  (internsCount, tasksCount, projectsCount) => {
    return {
      internsCount,
      tasksCount,
      projectsCount
    };
  }
);

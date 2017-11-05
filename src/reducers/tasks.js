import * as types from "../actions/action-types";
import initialState from "./initial-state";

export default function(state = initialState.tasksState, action) {
  switch (action.type) {
    case types.SET_TASKS_COUNT:
      return {
        ...state,
        count: action.payload.count
      };
    case types.SET_TASKS:
      return {
        ...state,
        tasks: action.payload.tasks
      };
    case types.IS_FETCHING_TASKS:
      return {
        ...state,
        isFetchingTasks: action.payload.isFetchingTasks
      };
    case types.FETCHING_TASKS_ERROR_MSG:
      return {
        ...state,
        fetchingTasksErrorMsg: action.payload.msg
      };

    default:
      return state;
  }
}

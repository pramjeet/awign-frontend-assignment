import axios from "axios";
import * as types from "./action-types";

export function fetchTasks() {
  return dispatch => {
    dispatch(isFatchingTasks(true));
    axios
      .get("http://demo9826255.mockable.io/tasks")
      .then(res => {
        dispatch(isFatchingTasks(false));
        dispatch(setTasksCount(res.data.count));
        dispatch(setTasks(res.data.tasks));
      })
      .catch(e => {
        dispatch(isFatchingTasks(false));
        dispatch(setFatchingTasksErrorMsg(e.message));
      });
  };
}

export function setTasksCount(count) {
  return {
    type: types.SET_TASKS_COUNT,
    payload: { count }
  };
}

export function setTasks(tasks) {
  return {
    type: types.SET_TASKS,
    payload: { tasks }
  };
}

export function isFatchingTasks(isFatchingTasks) {
  return {
    type: types.IS_FETCHING_TASKS,
    payload: { isFatchingTasks }
  };
}

export function setFatchingTasksErrorMsg(msg) {
  return {
    type: types.FETCHING_TASKS_ERROR_MSG,
    payload: { msg }
  };
}

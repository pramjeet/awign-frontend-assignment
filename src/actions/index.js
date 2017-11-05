import { fetchInterns } from "./interns-actions";
import { fetchTasks } from "./tasks-actions";
import { fetchProjects } from "./projects-actions";

export function fetchAll() {
  return dispatch => {
    dispatch(fetchInterns());
    dispatch(fetchTasks());
    dispatch(fetchProjects());
  };
}

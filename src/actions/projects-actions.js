import axios from "axios";
import * as types from "./action-types";

export function fetchProjects() {
  return dispatch => {
    dispatch(isFatchingProjects(true));
    axios
      .get("http://demo9826255.mockable.io/projects")
      .then(res => {
        dispatch(isFatchingProjects(false));
        dispatch(setProjectsCount(res.data.count));
        dispatch(setProjects(res.data.projects));
      })
      .catch(e => {
        dispatch(isFatchingProjects(false));
        dispatch(setFatchingProjectsErrorMsg(e.message));
      });
  };
}

export function setProjectsCount(count) {
  return {
    type: types.SET_PROJECTS_COUNT,
    payload: { count }
  };
}

export function setProjects(projects) {
  return {
    type: types.SET_PROJECTS,
    payload: { projects }
  };
}

export function isFatchingProjects(isFatchingProjects) {
  return {
    type: types.IS_FETCHING_PROJECTS,
    payload: { isFatchingProjects }
  };
}

export function setFatchingProjectsErrorMsg(msg) {
  return {
    type: types.FETCHING_PROJECTS_ERROR_MSG,
    payload: { msg }
  };
}

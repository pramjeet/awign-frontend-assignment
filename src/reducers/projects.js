import * as types from "../actions/action-types";
import initialState from "./initial-state";

export default function(state = initialState.projectsState, action) {
  switch (action.type) {
    case types.SET_PROJECTS_COUNT:
      return {
        ...state,
        count: action.payload.count
      };
    case types.SET_PROJECTS:
      return {
        ...state,
        projects: action.payload.projects
      };
    case types.IS_FETCHING_PROJECTS:
      return {
        ...state,
        isFetchingProjects: action.payload.isFetchingProjects
      };
    case types.FETCHING_PROJECTS_ERROR_MSG:
      return {
        ...state,
        fetchingProjectsErrorMsg: action.payload.msg
      };

    default:
      return state;
  }
}

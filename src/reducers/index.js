import { combineReducers } from "redux";
import internsState from "./interns";
import tasksState from "./tasks";
import projectsState from "./projects";
export default combineReducers({ internsState, tasksState, projectsState });

import { fetchInterns } from "./interns-actions";

export function fetchAll() {
  return dispatch => {
    dispatch(fetchInterns());
  };
}

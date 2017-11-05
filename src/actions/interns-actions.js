import axios from "axios";
import * as types from "./action-types";

export function fetchInterns() {
  return dispatch => {
    dispatch(isFatchingInterns(true));
    dispatch(setFatchingInternsErrorMsg(""));
    axios
      .get("http://demo9826255.mockable.io/interns")
      .then(res => {
        dispatch(isFatchingInterns(false));
        dispatch(setInternsCount(res.data.count));
        dispatch(setInterns(res.data.interns));
      })
      .catch(e => {
        dispatch(isFatchingInterns(false));
        dispatch(setFatchingInternsErrorMsg(e.message));
      });
  };
}

export function setInternsCount(count) {
  return {
    type: types.SET_INTERNS_COUNT,
    payload: { count }
  };
}

export function setInterns(interns) {
  return {
    type: types.SET_INTERNS,
    payload: { interns }
  };
}

export function isFatchingInterns(isFetchingInterns) {
  return {
    type: types.IS_FETCHING_INTERNS,
    payload: { isFetchingInterns }
  };
}

export function setFatchingInternsErrorMsg(msg) {
  return {
    type: types.FETCHING_INTERNS_ERROR_MSG,
    payload: { msg }
  };
}

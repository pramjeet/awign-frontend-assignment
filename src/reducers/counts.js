import types from "../actions/action-types";
import initialState from "./initial-state";

export default function(state = initialState.counts, action) {
  switch (action.type) {
    case types.SET_INTERNS:
      return {
        ...state,
        interns: action.payload.interns
      };
    case types.IS_FETCHING_INTERNS:
      return {
        ...state,
        isFetchingTnterns: action.payload.isFetchingTnterns
      };
    case types.FETCHING_INTERNS_ERROR_MSG:
      return {
        ...state,
        fetchingInternsErrorMsg: action.payload.msg
      };

    default:
      return state;
  }
}

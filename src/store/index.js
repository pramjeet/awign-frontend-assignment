import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import initialState from "../reducers/initial-state";
export default createStore(rootReducer, initialState, applyMiddleware(thunk));

import userReducer from "./user";
import appReducer from "./app";
import { combineReducers } from "redux";

const allReducers = combineReducers({ user: userReducer, app: appReducer });

export default allReducers;

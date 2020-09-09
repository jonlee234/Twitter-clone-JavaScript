import { combineReducers } from "redux";
import { authReducer } from "./auth";
import imageReducer from "./image"

export default combineReducers({ auth: authReducer, image: imageReducer });

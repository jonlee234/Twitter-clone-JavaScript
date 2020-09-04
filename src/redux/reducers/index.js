import { combineReducers } from "redux";
import { authReducer } from "./auth";
import {listReducer} from "./userlist"

export default combineReducers({ auth: authReducer,
users: listReducer });

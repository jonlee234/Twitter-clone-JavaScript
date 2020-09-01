import { combineReducers } from "redux";
import { authReducer } from "./auth";
import {msgReducer} from './messages'

export default combineReducers({
     auth: authReducer,
     messages : msgReducer
});

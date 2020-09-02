import { combineReducers } from "redux";
import { authReducer } from "./auth";
import msgReducer from '../reducers/messages'

export default combineReducers({ 
    auth: authReducer, 
    message : msgReducer
});

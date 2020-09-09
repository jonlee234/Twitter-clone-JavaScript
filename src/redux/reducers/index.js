import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { likePost } from './likepost'
import {msgReducer}  from './messages'

export default combineReducers({ auth: authReducer, likepost: likePost, messages : msgReducer });

import { combineReducers } from "redux";
import { authReducer } from "./auth";
import imageReducer from "./image"
import { listReducer } from "./userlist";
import { signupReducer } from "./signup";
import{userReducer} from "./users"
import {msgReducer} from './messages'
import {likeReducer} from './likepost'

export default combineReducers({ 
  auth: authReducer, 
  image: imageReducer,
  userlist: listReducer,
  signup: signupReducer,
  users: userReducer,
  messages: msgReducer,
  likes: likeReducer
});
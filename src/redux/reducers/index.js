import { combineReducers } from "redux";
import { authReducer } from "./auth";
import imageReducer from "./image"
import { listReducer } from "./userlist";
import { signupReducer } from "./signup";
import{userReducer} from "./users"
import {msgReducer} from './messages'
import {likeReducer} from './likepost'
import {getPictureReducer} from './getPicture'
import {msgByIdReducer} from './getmessagebyid'

export default combineReducers({ 
  auth: authReducer, 
  image: imageReducer,
  userList: listReducer,
  signup: signupReducer,
  users: userReducer,
  messages: msgReducer,
  likes: likeReducer,
  pic : getPictureReducer,
  getMessage: msgByIdReducer
});
import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { listReducer } from "./userlist";
import { signupReducer } from "./signup";
import{userReducer} from "./users"
export default combineReducers({
  auth: authReducer,
  users: listReducer,
  signup: signupReducer,
  user: userReducer
});

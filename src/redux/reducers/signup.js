import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE} from "../actions/signup";

// INITIAL STATE
const INITIAL_STATE = {
  
  username: "",
  password: "",
  displayName: "",
  loading: false,
  error: "",
  isSucsessful : false
};

export const signupReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...INITIAL_STATE,
        loading: true,
        isSucsessful:false
      };
    case SIGNUP_SUCCESS:
      const { username,displayName,password} = action.payload;
      return {
        ...INITIAL_STATE,
        username,
        password,
        displayName,
        loading: false,
        isSucsessful: true
      };
    case SIGNUP_FAILURE:
      return {
        ...INITIAL_STATE,
        isSucsessful:false
      };
   
    default:
      return INITIAL_STATE;
  }
};

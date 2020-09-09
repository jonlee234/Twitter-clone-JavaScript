import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE} from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  
  username: "",
  password: "",
  displayName: "",
  loading: false,
  error: "",
};

export const signupReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      const { username,displayName,password} = action.payload;
      return {
        ...INITIAL_STATE,
        username,
        password,
        displayName,
        loading: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
   
    default:
      return state;
  }
};

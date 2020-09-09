import { GET_USER } from "../actions/getUser";

// INITIAL STATE
const INITIAL_STATE = {
  user: [],
};

export const userReducer = (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case GET_USER:
      return { user:
         [
            ...state.user, 
          action.payload] };
  
default:
  return state;
}};



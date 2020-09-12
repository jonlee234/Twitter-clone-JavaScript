import { CREATE_LIST } from "../actions/userlist";

// INITIAL STATE
const INITIAL_STATE = {
  users: [],
};

export const listReducer = (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case CREATE_LIST:
      return { 
        users:[
            // ...state.users, 
          action.payload] };
  
default:
  return state;
}};

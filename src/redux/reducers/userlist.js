import { CREATE_LIST,} from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  
  users:[]
  
};

export const createList = (state = {INITIAL_STATE}, action)=> {
    switch (action.type) {
       case CREATE_LIST:
           console.log(action.payload.data)
           return { ...INITIAL_STATE, users: action.payload.data.users };
         }
    return state;
  }
   
   


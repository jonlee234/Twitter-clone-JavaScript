import {GET_MESSAGEBYID} from '../actions'
    
const initialState = {
}

export const msgByIdReducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_MESSAGEBYID:
            return {
                messagebyId: [action.payload]
            }
        default:
            return state;
        }
    }
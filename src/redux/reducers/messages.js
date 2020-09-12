import {GET_MESSAGES,RESET_MESSAGES,GET_MESSAGEBYID} from '../actions'

const initialState = {
    messages : []
}

export const msgReducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
               messages : [
                    // ...state.messages,
                   action.payload
               ]
            }
        case RESET_MESSAGES :
            return {
                messages : []
            }
        case GET_MESSAGEBYID:
            return {
                messages : []
            }
        default:
            return state;
    }
}
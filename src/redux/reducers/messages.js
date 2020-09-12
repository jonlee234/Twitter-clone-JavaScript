import {GET_MESSAGES,RESET_MESSAGES, DEL_MESSAGE} from '../actions'

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
        case DEL_MESSAGE:
            return state
        default:
            return state;
    }
}
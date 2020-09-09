import {GET_MESSAGES,RESET_MESSAGES} from '../actions/messages'
import {CREATE_POST}  from '../actions/'

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
            case CREATE_POST:
        return []
        default:
            return state;
    }
}
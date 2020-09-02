// TODO: implement

import {GET_MESSAGE_BY_ID,GET_MESSAGE_BY_ID_FAILED} from '../actions/messages'
const initialState = {
    message : []
}

const msgReducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_MESSAGE_BY_ID:
        return {
            message : [
                action.payload
            ]
        }
        case GET_MESSAGE_BY_ID_FAILED :
            return {
                message : [
                    action.payload
                ]
            }
        default:
           return state;
    }
}
export default msgReducer
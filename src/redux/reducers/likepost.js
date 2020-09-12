import { ADD_LIKE, DEL_LIKE } from '../actions/'
import { getStoredState } from 'redux-persist'

const initialState = {}
export const likeReducer = (state= {initialState}, action) => {
    switch(action.type) {
        case ADD_LIKE:
            return state
        case DEL_LIKE:
            return state
            default:
                return state
    }
}

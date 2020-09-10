import { ADD_LIKE, DEL_LIKE } from '../actions/'
import { getStoredState } from 'redux-persist'

const initialState = getStoredState
export const likeReducer = (state= {initialState}, action) => {
    switch(action.type) {
        case ADD_LIKE:
            return {liked: true}
        case DEL_LIKE:
            return {liked: false}
            default:
                return state
    }
}

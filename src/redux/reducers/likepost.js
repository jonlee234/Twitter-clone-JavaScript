import { ADD_LIKE } from '../actions/'
import { getStoredState } from 'redux-persist'

const initialState = getStoredState
export const likeReducer = (state= {initialState}, action) => {
    switch(action.type) {
        case ADD_LIKE:
            return state
            default:
                return state
    }
}

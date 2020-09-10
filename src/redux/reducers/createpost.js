import { CREATE_POST } from '../actions/'
import { getStoredState } from 'redux-persist'

const initialState = getStoredState
export const likeReducer = (state= {initialState}, action) => {
    switch(action.type) {
        case CREATE_POST:
            return state
            default:
                return state
    }
}


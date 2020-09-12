import { CREATE_POST } from '../actions/'


const initialState = {}
export const likeReducer = (state= {initialState}, action) => {
    switch(action.type) {
        case CREATE_POST:
            return state
            default:
                return state
    }
}


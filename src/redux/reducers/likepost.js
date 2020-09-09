import { ADD_LIKE } from '../actions/'

const initialState = {}

export const likeReducer = (state = {...initialState}, action) => {
    switch(action.type) {
        case ADD_LIKE:
            return Object.assign({},state,{likes: action.likes})
            default:
                return state
    }
}

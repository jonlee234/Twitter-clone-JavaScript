import {CREATE_POST}  from '../actions/'

//reducers
const initialState = {}

export const createPost = (state = {...initialState}, action) => {
    switch(action.type) {
    case CREATE_POST:
        return Object.assign({},state,action.newPost)
    
    default:
        return state
}}

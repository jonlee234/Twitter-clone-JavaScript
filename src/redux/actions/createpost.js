import {v4 as uuid } from 'uuid' // TODO: implement

//actions
export const CREATE_POST = 'CREATE_POST'
export const CreatePost = (timedate, text, userName) => {
    console.log('Action')
    return {
        type: CREATE_POST,
        newPost: {
        time: timedate,
        id: {uuid},
        like:[],
        text: text,
        username: userName
    }}
}

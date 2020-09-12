import {v4 as uuid } from 'uuid' // TODO: implement
import api from '../../utils/api'

//actions
export const CREATE_POST = 'CREATE_POST'
// export const CreatePost = (timedate, text, userName) => {
//     console.log('Action')
//     return {
//         type: CREATE_POST,
//         newPost: {
//         time: timedate,
//         id: {uuid},
//         like:[],
//         text: text,
//         username: userName
//     }}
// }

export const CreatePost = (text) => async(dispatch,getState)=>{
    try{
        console.log(text)
        const payload = await api.postMessage({text})
        dispatch({type:CREATE_POST,payload})
    } catch(err){
        console.log(err)
    }
}
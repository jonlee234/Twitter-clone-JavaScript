import api from '../../utils/api'

//actions
export const CREATE_POST = 'CREATE_POST'
export const CreatePost = (userStr) => async(dispatch, getState) => {
    try {
        dispatch({ type: CREATE_POST });
       await api.postMessage(userStr)}
    catch (err) {console.log (err)}
}

import api from '../../utils/api'
export const ADD_LIKE = 'ADD_LIKE'

export const LikePost = (messageId) => async(dispatch, getState) => {
    try {
        dispatch({ type: ADD_LIKE });
       await api.likePost(messageId)}
    catch (err) {console.log (err)}
}
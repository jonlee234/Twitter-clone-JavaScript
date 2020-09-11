import api from '../../utils/api'

export const DEL_LIKE = 'DEL_LIKE'
export const UnLikePost = (userId) => async(dispatch, getState) => {
    try {
        dispatch({ type: DEL_LIKE });
       await api.likePost(userId)}
    catch (err) {console.log (err)}
}
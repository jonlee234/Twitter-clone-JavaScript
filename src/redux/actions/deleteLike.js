import api from '../../utils/api'

export const DEL_LIKE = 'DEL_LIKE'
export const UnLikePost = (likeId) => async(dispatch, getState) => {
    try {
        dispatch({ type: DEL_LIKE });
       await api.unLike(likeId)}
    catch (err) {console.log (err)}
}
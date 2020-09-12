import api from '../../utils/api'

export const DEL_MESSAGE = 'DEL_MESSAGE'
export const deleteMessage = (messageId) => async(dispatch, getState) => {
    try {
        dispatch({ type: DEL_MESSAGE });
       await api.deleteMessage(messageId)}
    catch (err) {console.log (err)}
}
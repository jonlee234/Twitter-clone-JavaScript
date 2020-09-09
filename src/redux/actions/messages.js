import api from '../../utils/api'
//Message Constants
export const GET_MESSAGES = 'GET_MESSAGES'
export const RESET_MESSAGES = 'RESET_MESSAGES'
// export const GET_MESSAGES_FAILURE = 'GET_MESSAGES_FAILURE'

export const getMessages = () => async (dispatch, getState) => {
    try {
      const payload = await api.getMessages();
      dispatch({ type: GET_MESSAGES, payload });
    } catch (err) {
    //   dispatch({
    //     type: GET_MESSAGES_FAILURE,
    //     payload: err.message,
    //   });
    console.error(err)
    }
  };

 export const resetMessages = () => {
     return {
         type : RESET_MESSAGES
     }
 }

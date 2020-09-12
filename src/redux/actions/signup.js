import api from "../../utils/api";


export const SIGNUP = "SIGNUP"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_FAILURE = "SIGNUP_FAILURE"




export const createUser = (credentials) => async (dispatch, getState) => {
    try {
      dispatch({ type: SIGNUP });
      const payload = await api.createUser(credentials);
      dispatch({ type: SIGNUP_SUCCESS, payload });
    } catch (err) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: err.message,
      });
    }
  };

  export const actions = {
    createUser
  };
  

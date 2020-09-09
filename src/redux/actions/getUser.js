import api from "../../utils/api";

export const GET_USER = "GET_USER";



export const getUser = () => async (dispatch, getState) => {
  try {
    const payload = await api.getUser();
    dispatch({ type: GET_USER, payload });
  } catch (err) {
    // dispatch({
    //   type: CREATE_LIST_FAIL,
    //   payload: err.message,
    // });
    console.error(err);
  }
};


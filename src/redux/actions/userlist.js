import api from "../../utils/api";

export const CREATE_LIST = "CREATE_LIST";

export const CREATE_LIST_FAIL = "CREATE_LIST_FAIL"

export const getUserlist = () => async (dispatch, getState) => {
  try {
    const payload = await api.getUserlist();
    dispatch({ type: CREATE_LIST, payload });
  } catch (err) {
    // dispatch({
    //   type: CREATE_LIST_FAIL,
    //   payload: err.message,
    // });
    console.error(err);
  }
};


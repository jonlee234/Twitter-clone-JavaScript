import api from "../../utils/api";

export const CREATE_LIST = "CREATE_LIST";
export const CREATE_LIST_SUCCESS = "CREATE_LIST_SUCCESS"
export const CREATE_LIST_FAIL = "CREATE_LIST_FAIL"

const createList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_LIST });
    const payload = await api.getUserlist();
    dispatch({ type: CREATE_LIST_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: CREATE_LIST_FAIL,
      payload: err.message,
    });
  }
};

export const actions = {
  createList,
};

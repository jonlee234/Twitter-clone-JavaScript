import api from "../../utils/api";

export const GET_MESSAGEBYID = "GET_MESSAGEBYID";



export const getMessageById = (messageId) => async (dispatch, getState) => {
  try {
    const payload = await api.getMessageById(messageId);
    dispatch({ type: GET_MESSAGEBYID, payload });
  } catch (err) {
    console.error(err);
  }
};
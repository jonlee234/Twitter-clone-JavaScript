import api from '../../utils/api'

export const GET_MESSAGE_BY_ID = 'GET_MESSAGE_BY_ID'
export const GET_MESSAGE_BY_ID_FAILED = 'GET_MESSAGE_BY_ID_FAILED'

const getMessageById = (id) => async(dispatch,getState)=>{
    try {
        const payload = await api.getMessageById(id)
        dispatch({type:GET_MESSAGE_BY_ID,payload})
    } catch (err){
        console.log('yeer')
        dispatch({type : GET_MESSAGE_BY_ID_FAILED,payload: err})
    }
}
export default getMessageById
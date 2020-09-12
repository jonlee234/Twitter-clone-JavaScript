import api from '../../utils/api'

export const GET_PICTURE = 'GET_PICTURE'

export const getPicture = (username) => async (dispatch,getState) => {
    try{
        const payload = await api.getPicture(username)
        dispatch({type:GET_PICTURE,payload})
    }catch(err){
        console.log(err)
    }
}
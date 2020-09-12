import api from "../../utils/api"

export const IMAGE = "IMAGE"
export const postImage =(info) =>async(dispatch, getState)=>{
    try {
        console.log(info)
        const payload = await api.postImage(info)
        dispatch({type:IMAGE,payload})
    }catch (err) {
        console.log (err)
    }
    
}

// export default postImage
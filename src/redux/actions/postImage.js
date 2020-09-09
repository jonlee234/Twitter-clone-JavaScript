import api from "../../utils/api"

export const IMAGE = "IMAGE"
export const postImage =(image) =>async(dispatch, getState)=>{
    try {await api.postPicture(image)}
        catch (err) {console.log (err)}
    
}

// export default postImage
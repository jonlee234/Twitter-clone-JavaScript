import api from "../../utils/api"


export const IMAGE = "IMAGE"
export const postImage =(image) =>async(dispatch, getState)=>{
    console.log("postImageActionFigure")
    try {
    dispatch ({type:IMAGE})
    const payLoad = await api.postPicture(image)
        
        dispatch ({type :IMAGE, payLoad})}
        catch (err) {console.log (err)}
}

// export default postImage
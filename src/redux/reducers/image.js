import {IMAGE} from "../actions/postImage"

// const newImage = "test"
const initialState = {image : ''}
 const imageReducer = (state=initialState, action) => {
    switch (action.type){
        case IMAGE: 
        return {
            newImage : action.payload 
        }
        default: return state
    }
}
export default imageReducer
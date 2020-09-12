import {IMAGE} from "../actions/postImage"
import { render } from "react-dom"
import { actions } from "../actions/auth"

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
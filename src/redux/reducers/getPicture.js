import {GET_PICTURE} from '../actions/getPicture'

const initialState = {
    picture : []
}

export const getPictureReducer = (state=initialState,action)=>{
    switch (action.type) {
        case GET_PICTURE:
            
            return {
                picture : [action.payload]
            };
    
        default:
            return state;
    }
}
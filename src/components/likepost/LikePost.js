import React from 'react';
import { useDispatch } from "react-redux";
import { LikePost } from '../../redux/actions'

export const LikePosts = (props) => {

    const dispatch = useDispatch()

    const handleSubmit = () => {
        
        dispatch(LikePost(props.messageId))
    }

    return (
        <React.Fragment>
            <button onClick={handleSubmit}> Likes: {props.messageLikes.length}</button>
        </React.Fragment>
    )
}

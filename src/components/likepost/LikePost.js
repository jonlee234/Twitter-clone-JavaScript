import React from 'react';
import { useDispatch } from "react-redux";
import { LikePost } from '../../redux/actions'

export const LikePosts = (messageLikes, messageId) => {

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(LikePost(messageId))
    }

    return (
        <React.Fragment>
            <button onClick={handleSubmit}> Likes: {messageLikes.length}</button>
        </React.Fragment>
    )
}

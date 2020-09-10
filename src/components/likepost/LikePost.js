import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { LikePost, UnLikePost, getMessages } from '../../redux/actions'

export const LikePosts = (props) => {

    const dispatch = useDispatch()
    const likes = useSelector(state => state.likes)
    const userId = useSelector(state => state.auth.username)

    const handleSubmit = () => {
        console.log(likes, userId)
       if (likes.liked === false) {dispatch(LikePost(props.messageId),getMessages())}
       else {dispatch(UnLikePost(userId),getMessages())}
        
    }

    return (
        <React.Fragment>
            <button onClick={handleSubmit}> Likes: {props.messageLikes.length}</button>
        </React.Fragment>
    )
}

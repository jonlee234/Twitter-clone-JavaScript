import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getMessages, LikePost, UnLikePost } from '../../redux/actions'

export const LikePosts = (props) => {

    const dispatch = useDispatch()
    const likes = props.messageLikes
    const username = useSelector(state => state.auth.username)
    

    const handleSubmit = () => {
        const likeBool = likes.some(element => (element.username === username))
        const likeId = likes.filter(element => (element.username === username))

        if (likeBool === true) {
            dispatch(UnLikePost(likeId[0].id))
            dispatch(getMessages())
        }
        else {
            dispatch(LikePost(props.messageId))
            dispatch(getMessages())
        }
    }

    return (
        <React.Fragment>
            <button onClick={handleSubmit}> Likes: {likes.length}</button>
        </React.Fragment>
    )
}

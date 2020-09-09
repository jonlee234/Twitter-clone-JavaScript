import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { LikePost } from '../../redux/actions'

export const LikePosts = (likes) => {

    const dispatch = useDispatch()
    const userName = useSelector(state => state)

    const handleSubmit = () => {
        dispatch(LikePost(userName.auth.username))
    }

    return (
        <React.Fragment>
            <button onClick={handleSubmit}> Likes: {}</button>
        </React.Fragment>
    )
}

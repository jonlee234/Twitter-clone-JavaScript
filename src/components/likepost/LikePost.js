import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { AddLike } from '../../redux/actions'

export const AddLikes = (likes) => {

    const dispatch = useDispatch()
    const userName = useSelector(state => state)

    const handleSubmit = () => {
        dispatch(AddLike(userName.auth.username))
    }

    return (
        <React.Fragment>
            <button onClick={handleSubmit}> Likes: {likes.likes.length}</button>
        </React.Fragment>
    )
}

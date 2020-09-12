import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteMessage, getMessages} from '../../redux/actions'

export const DeleteMsg = (props) => {
    
    const dispatch = useDispatch()
    
    const deleteHandler = () => {
        dispatch(deleteMessage(props.messageId))
        dispatch(getMessages())
    }
    
    return(
        <button onClick={deleteHandler}>DELETE</button>
    )
}
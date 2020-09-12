import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Messages} from '../../components'
import { getMessageById } from '../../redux/actions'

export const GetMessageById = () => {
    const [state, setState] = useState({
        searchStr: '',
        messageId: []
    })
    const dispatch = useDispatch()
    const {messages, users } = useSelector((state) => ({
        messages: state.messages.messages[0],
        users: state.userList.users[0].users
    }))
    const changeHandler = (event) => {
        setState({
            searchStr: event.target.value,
            messageId: messages.find(element => element.text.includes(state.searchStr)||element.username.includes(state.searchStr))
        })
    }

    const submitHandler = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault()
            setState({
                
                
            })
            
            dispatch(getMessageById(state.messageId.id))
            event.target.value = ''
        }
    }
    return (
        <>
         <form>
            <label>Search</label>
        <input type='search' value={state.value} placeholder='Search messages...' list='searchAutofill' onChange={changeHandler} onKeyDown={submitHandler}/>
        <datalist id='searchAutofill'>
            {messages.map(items => <option value={items.text} />)}
            {users.map(items => <option value={items.username} />)}
        </datalist>
        </form>
        <Messages />
        </>
    )
}
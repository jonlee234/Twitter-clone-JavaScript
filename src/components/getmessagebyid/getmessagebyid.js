import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Messages, LikePosts} from '../../components'
import { getMessageById} from '../../redux/actions'
import Card from 'react-bootstrap/Card'

export const GetMessageById = () => {
    const [state, setState] = useState({
        searchStr: '',
        messageId: [],
        clear: true
    })

    const dispatch = useDispatch()
    const {messages, users, messageById } = useSelector((state) => ({
        messages: state.messages.messages[0],
        users: state.userList.users[0].users,
        messageById: state.getMessage.messagebyId
    }))

    

    const changeHandler = (event) => {
        setState({
            searchStr: event.target.value,
            messageId: messages.find(element => element.text.includes(state.searchStr)||element.username.includes(state.searchStr))
        })
    }

    const submitHandler = (event) => {
        console.log(messageById[0].message)
        if (event.keyCode === 13) {
            event.preventDefault()
             console.log(messageById)
            setState({
                clear: false
            })
            console.log(state.messageId.id)
            dispatch(getMessageById(state.messageId.id))
            event.target.value = ''
        }
    }

    const resetMessageFeed = () => {
        setState({
            clear: true
        })
    }

    return (
        <>
         <form onLoad={dispatch(getMessageById(0))}>
            <label>Search</label>
        <input type='search' value={state.value} placeholder='Search messages...' list='searchAutofill' onChange={changeHandler} onKeyDown={submitHandler}/>
        <datalist id='searchAutofill'>
            {messages.map(items => <option value={items.text} />)}
            {users.map(items => <option value={items.username} />)}
        </datalist>
        </form>
        <button onClick={resetMessageFeed}>Message Feed</button>
        {state.clear === true && <Messages />}

        {state.clear === false && 
        <Card>
        {/* <Card.Img style={{height:'290px'}} src={picture ==`https://kwitter-api.herokuapp.com/users/${props.username}/picture` ? `https://kwitter-api.herokuapp.com/users/${props.username}/picture`: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}
              alt={'ok'}/> */}
        <Card.Body>
        <Card.Title>{messageById[0].message.username}</Card.Title>
        <Card.Text>Post : {messageById[0].message.text}</Card.Text>
        <Card.Text>Created at : {messageById[0].message.createdAt}</Card.Text>
        <LikePosts messageLikes={messageById[0].message.likes} messageId={messageById.id}/>
    </Card.Body>
</Card>
        }
        </>
    )
}
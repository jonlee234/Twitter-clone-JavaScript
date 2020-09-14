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
    const {messagelist, users, messageById } = useSelector((state) => ({
        messagelist: state.messages.messages[0],
        users: state.userList.users[0].users,
        messageById: state.getMessage.messagebyId
    }))

    

    const changeHandler = (event) => {
        setState({
            searchStr: event.target.value,
            messageId: messagelist.filter(element => element.text.includes(state.searchStr)||element.username.includes(state.searchStr))
        })
        console.log(state.searchStr, state.messageId)
    }

    const submitHandler = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault()
            setState({
                searchStr: event.target.value,
                clear: false
            })
            console.log(state.messageId)
            dispatch(getMessageById(state.messageId[0].id))
            event.target.value = ''
        }
    }

    const resetMessageFeed = () => {
        setState({
            clear: true
        })
    }

    const messageIdCard = 
        <React.Fragment>
        <button onClick={resetMessageFeed}>Message Feed</button>
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
            </React.Fragment>

    return (
        <>
         <form>
            <label>Search</label>
        <input type='search' value={state.value} placeholder='Search messages...' list='searchAutofill' onChange={changeHandler} onKeyDown={submitHandler}/>
        <datalist id='searchAutofill'>
            {messagelist.map(items => <option value={items.text} />)}
            {users.map(items => <option value={items.username} />)}
        </datalist>
        </form>
        
        {state.clear
        ?<Messages/>
        :messageIdCard}
        </>
    )
}
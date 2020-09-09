import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreatePost } from '../../redux/actions'

export const CreatePosts = () => {

const [state, setState] = useState({
        postStr: "",
        currentDate: ""
      });

const dispatch = useDispatch()
const userName = useSelector(state => state.auth)

const handleChange = (event) => {
    setState({
        postStr: event.target.value,
        currentDate: Date.now()
    })
    console.log('handleChange',state.postStr, state.currentDate)
}

const handleSubmit = (event) => {
    if (event.keyCode === 13) { 
        console.log('handleSubmit',state.postStr, state.currentDate)
    dispatch(CreatePost(state.currentDate,state.postStr, userName.username))
    event.target.value = '' 
    }
}

return (
    <>
        <label>Kwitt</label><br/>
        <input type='text' value={state.value} onChange={handleChange} onKeyDown={handleSubmit}/>
    </>
    )
    };
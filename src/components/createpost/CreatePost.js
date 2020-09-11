import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreatePost, getMessages } from '../../redux/actions'

export const CreatePosts = () => {

const [state, setState] = useState({
        postStr: "",
      });

const dispatch = useDispatch()

const handleChange = (event) => {
    setState({
        postStr: event.target.value,
    })
    console.log('handleChange',state.postStr)
}

const handleSubmit = (event) => {
    if (event.keyCode === 13) { 
    dispatch(CreatePost(state.postStr),getMessages())
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
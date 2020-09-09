import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const CreatePost = () => {

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
}

const handleSubmit = (event) => {
    if (event.keyCode === 13) { 
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
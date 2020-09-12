import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
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
}
const handleSubmit = (event) => {
    if (event.keyCode === 13) { 
    dispatch(CreatePost(state.postStr))
    dispatch(getMessages())
    event.target.value = '' 
    }
}

return (
    <>
        <label>Post A Kwitt</label><br/>
        <input type='text' placeholder='Share your voice!'value={state.value} onChange={handleChange} onKeyDown={handleSubmit}/>
    </>
    )
    };
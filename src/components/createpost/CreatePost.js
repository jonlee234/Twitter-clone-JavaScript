import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreatePost } from '../../redux/actions'

export const CreatePosts = () => {

// const [state, setState] = useState({
//         postStr: "",
//         currentDate: ""
//       });

// const dispatch = useDispatch()
// const userName = useSelector(state => state.auth)

// const handleChange = (event) => {
//     setState({
//         postStr: event.target.value,
//         currentDate: Date.now()
//     })
//     console.log('handleChange',state.postStr, state.currentDate)
// }

// const handleSubmit = (event) => {
//     if (event.keyCode === 13) { 
//         console.log('handleSubmit',state.postStr, state.currentDate)
//     dispatch(CreatePost(state.currentDate,state.postStr, userName.username))
//     event.target.value = '' 
//     }
// }

const [state,setState] = useState('')
const dispatch = useDispatch()
const handleChange = (event) => {
    setState(event.target.value)
}
const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(CreatePost(state))
    setState('')
}
console.log(state)
// console.log(state)
return (
    <>
        <label>Kwitt</label><br/>
        <form onSubmit={handleSubmit}>
        <input type='text' value={state} onChange={handleChange}/>
        </form>
    </>
    )
    };
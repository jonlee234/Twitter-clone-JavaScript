import React, { useRef } from "react";
import { useState } from "react"
import {postImage} from "../../redux/actions/postImage"
import {getPicture} from '../../redux/actions/getPicture'
import { useSelector, useDispatch } from "react-redux";

//HandleSubmit
//HandleOnChange
//CheckImageSize image.size if statement >2000 alert too big<
//CheckImageType if statement image.type  !== "image/png" && return png jpg gif

const UserNamePicture =()=>  {
    const [image,setImage] = useState({
        img : null,
        username : null
    }
    )
    const [state,setState] = useState(false)
    const [search,setSearch] = useState('')
    const userName = useSelector(state=>state.auth.username)
    const dispatch = useDispatch()
    // const img = useSelector (state=>state.image)
        // console.log(img)

    // const onFileChange = (e) => {
    //     e.preventDefault()
    //     setImage( e.target.files)
    //     // console.log(this.state)
    //   }
    // const checkImageType = (e) => {
    //     const fileArr = e.target.files[0]
    //     if (
    //         image.type!== "image/png" && 
    //         image.type!== "image/jpeg" && 
    //         image.type!== "image/gif" 
    //         ) 
    //         { alert ("Wrong file type")
    //         return false
    //     }
    //     return true
    // }
    // const checkImageSize = (e) => {
    //     const fileArr = e.target.files[0]
    //     if (
    //         image.size > 200000  
    //         ) 
    //         { alert ("Need to be below 200 Kilobyte")
    //         return false
    //     }
    //     return true
    // }
    const form = useRef()
    
    const submit = (event) => {
        let file = new FormData(form.current)
        
        setImage(state =>({
            username : userName,
            img : file
        }))
    }
      
    const okay = e => {
        e.preventDefault()
        dispatch(postImage(image))
        setImage(state=>({
            username : null,
            img : null
        }))
    }
  
    const handleChange = e => {
        setSearch(e.target.value)
        setState(false)
    }
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(getPicture(search))
        setState(true)
    }
  
        // return ( 
        // <>
        // <form id ="usePicturer"  onSubmit ={onFileChange}> 
        // <input type= "file" ></input>
        // <button  type ="submit">Submit</button> 
        // {/*  image tag apiUrl this.props?? this api url: default img */}
        // </form>
        // </>
        // )
        return(
            <>
                <form ref={form} onSubmit={okay}>
                    <input type='file' id='filename' name='picture'  onChange={submit}/>
                    <button type='submit'>Submit</button>
                </form>
                <form onSubmit={handleSubmit}>
                    <input type='search' value={search} onChange={handleChange} placeholder='search image by id'/>
                </form>
                <button onClick={()=>{setState(false);setSearch('')}}>Reset</button>
                {state === false ? '' : <img src={`https://kwitter-api.herokuapp.com/users/${search}/picture`} alt={'not working'}/>}
            </>
        )
        

}
export default UserNamePicture 
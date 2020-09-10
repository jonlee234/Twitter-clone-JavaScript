import React from "react";
import { render } from "react-dom";
import { Component, useState } from "react"
import {postImage} from "../../redux/actions/postImage"
import { useSelector, useDispatch } from "react-redux";

//HandleSubmit
//HandleOnChange
//CheckImageSize image.size if statement >2000 alert too big<
//CheckImageType if statement image.type  !== "image/png" && return png jpg gif

const UserNamePicture =()=>  {
    const [image,setImage] = useState({image:null})
    const userName = useSelector (state=>state.auth.username)
        console.log(userName)

    const onFileChange = (e) => {
        e.preventDefault()
        setImage( e.target.files)
        // useDispatch ImageUpload
        // console.log(this.state)
      }
    const checkImageType = (e) => {
        const fileArr = e.target.files[0]
        if (
            image.type!== "image/png" && 
            image.type!== "image/jpeg" && 
            image.type!== "image/gif" 
            ) 
            { alert ("Wrong file type")
            return false
        }
        return true
    }
    const checkImageSize = (e) => {
        const fileArr = e.target.files[0]
        if (
            image.size > 200000  
            ) 
            { alert ("Need to be below 200 Kilobyte")
            return false
        }
        return true
    }
    const onChangeFile = (e) => {
        e.preventDefault()
        console.log(e.target.picture)
        const fileArr= new FormData(e.target)

        postImage(fileArr, userName) 
        }
        
     console.log(image)
        return ( 
        <>
        <form id ="usePicturer" onSubmit= {(e)=>onChangeFile(e)}>
        {/*  onSubmit ={onFileChange}>  */}
        <input type= "file" name="picture"/>
        {/* onChange= {onChangeFile}></input> */}
        <button  type ="submit">Submit</button> 
        {/*  image tag apiUrl this.props?? this api url: default img */}
        </form>
        </>
        )
        

        }
export default UserNamePicture 
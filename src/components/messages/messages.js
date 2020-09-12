import React,{useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {LikePosts } from '../likepost/LikePost'
import {getMessages} from '../../redux/actions/messages'
import './messages.css'
import Card from 'react-bootstrap/Card'

const Container = (props) => {
    
    const users = useSelector(state=>state.userList)
    // console.log(users.users[0].users)
    const userInfo = users.users[0].users
    let picture = ''
    
       for(let i = 0; i < userInfo.length;i++){
           if(userInfo[i].username === props.username && userInfo[i].pictureLocation !== null){
            //    console.log(userInfo[i].pictureLocation)
               picture = `https://kwitter-api.herokuapp.com/users/${props.username}/picture`
           } 
        //    if(userInfo[i].username !== props.username) {
        //        picture = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        //    }
       }

    return (
        <Card>
            <Card.Img style={{height:'250px'}} src={picture ==`https://kwitter-api.herokuapp.com/users/${props.username}/picture` ? `https://kwitter-api.herokuapp.com/users/${props.username}/picture`: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}
                  alt={'ok'}/>
        <Card.Body>
            <Card.Title>{props.username}</Card.Title>
            <Card.Text>Post : {props.text}</Card.Text>
            <Card.Text>Created at : {props.time}</Card.Text>
            {/* <LikePosts likes={props.likes}/> */}
        </Card.Body>
    </Card>
    )
}

export const Messages = (props) => {
    const messages = useSelector(state => state.messages)
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(getMessages())
    },[])
    
    // console.log(users.users[0].users)
    // console.log(messages)
    // const userInfo = users.users[0].users
   
    const messagesInfo = messages.messages[0].messages
    // for(let i = 0; i < messagesInfo.length;i++){
    //     console.log(messagesInfo[i].username)
    // // }
    // for(let i = 0; i < userInfo.length;i++){
    //     for(let j = 0; j < messagesInfo.length;j++){
    //         if(userInfo[i].username === messagesInfo[j].username){
    //             console.log(userInfo[i].pictureLocation)
    //         }
    //     }
    // }
    return(
        
        <div>
            {messages.messages[0].messages && messages.messages[0].messages.map(item => (
                // <div>
                //     <h4>{item.username}</h4>
                //     <p key={item.id}> Post : {item.text}</p>
                //     <p>{item.createdAt}</p>
                //     <LikePosts likes={item.likes} />
                //     <br />
                //     <br/>
                // </div>
               <Container key={item.id} username={item.username} text={item.text} time={item.createdAt}/>
    ))}

            {/* // <h4>{props.username}</h4>
            // <p key={props.id}>Post : {props.text}</p>
            // <p>{props.time}</p>
            // <LikePosts likes={props.likes} /> */}
         
           
        </div>
    )
}
 import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {LikePosts } from '../likepost/LikePost'
import {getMessages} from '../../redux/actions/messages'

export const Messages = (props) => {
    const messages = useSelector(state => state.messages)
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(getMessages())
    },[])

    return(
        <div>
            {messages.messages[0] && messages.messages[0].map(item => (
                <div>
                    <h4>{item.username}</h4>
                    <p key={item.id}> Post : {item.text}</p>
                    <p>{item.time}</p>
                    <LikePosts messageLikes={item.likes} messageId={item.id}/>
                </div>
    ))}

            {/* // <h4>{props.username}</h4>
            // <p key={props.id}>Post : {props.text}</p>
            // <p>{props.time}</p>
            // <LikePosts likes={props.likes} /> */}
         
           
        </div>
    )
}
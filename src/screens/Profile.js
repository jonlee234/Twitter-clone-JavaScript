import React from "react";
import { MenuContainer } from "../components";
import {useSelector} from "react-redux"



export const ProfileScreen = () => {
 
  const { username } = useSelector((state) => ({
    username: state.auth.username,
  }));
  console.log(username)
  
 return (
 <>
    <MenuContainer />
    <h2>Profile</h2>
    
 
  </>
)};

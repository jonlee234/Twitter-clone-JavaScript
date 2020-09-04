import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserlist } from "../../redux/actions/userlist";
import "./explore-form.css";
import { v4 as uuidv4 } from 'uuid'
import Card from 'react-bootstrap/Card'
import camera from './images/cameraplace.jpg'






const Test = (props) => {
  return (
    
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {`https://kwitter-api.herokuapp.com${props.photo}`}alt src={camera} />
  <Card.Body>
    <Card.Title>Display Name= {props.displayName}</Card.Title>
    <Card.Text>User Name = {props.username}</Card.Text>
    <Card.Text>
    about={props.about}
    </Card.Text>
   
  </Card.Body>
</Card>

  
  )
};
export const ExploreForm = () => {
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();

  
  const test = event => {
dispatch(getUserlist());}
  
  console.log(users.users[1]);

  

  return (
    
    <React.Fragment>
      <div id = "cards">
      {users.users[1].map(item => (
        
        <Test photo= {item.pictureLocation} displayName={item.displayName} key={uuidv4()} username={item.username} about={item.about}/>
      ))}</div>
    </React.Fragment>
   
  );
};

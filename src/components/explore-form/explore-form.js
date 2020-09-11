import React ,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserlist } from "../../redux/actions/userlist";
import "./explore-form.css";
import { v4 as uuidv4 } from "uuid";
import Card from "react-bootstrap/Card";
import Camera from "./images/cameraplace.jpg";
import { once } from 'lodash';
const Container = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={
          props.photo === null
            ? "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            : "https://kwitter-api.herokuapp.com" + props.photo
        }
      />
      <Card.Body>
        <Card.Title>Display Name= {props.displayName}</Card.Title>
        <Card.Text>User Name = {props.username}</Card.Text>
        <Card.Text>about={props.about}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export const ExploreForm = () => {
  const users = useSelector((state) => state.users);
   once(useDispatch(getUserlist()))
  return (
    <React.Fragment>
      <div id="cards">
        {users.users[1].map((item) => (
          <Container
            photo={item.pictureLocation}
            displayName={item.displayName}
            key={uuidv4()}
            username={item.username}
            about={item.about}
          />
        ))}
      </div>
    </React.Fragment>
  );
};


import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import {getMessages,resetMessages} from '../../redux/actions/messages'
import { Loader } from "../loader";
import "./LoginForm.css";

///Creates this component to test whether my code was working properly you can delete it if working properly
const Test = (props) => {
  return (
    <div>
    <h3>{props.username}</h3>
    <p key={props.id}> Post :: {props.text}</p>
  <p key={props.id}>posted on : {props.time}</p>
  <p>Likes : {props.like.length}</p>
    <br/>
    </div>
  )
}
///All above is simply test code and can be deleted 




export const LoginForm = ({ login }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  //TEST CODE 
  const messages = useSelector(state => state.messages)
  //TEST CODE CAN BE DELETED


  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actions.login(state));
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  //TEST FUNCTIONS!!! 
  const test = event => {
    dispatch(getMessages())
  }
  const test2 = event => {
    dispatch(resetMessages())
  }
  console.log(messages.messages[0])
  //TEST FUNCTIONS ^ CAN DELETE


  return (
    <React.Fragment>
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          required
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}

      {/* Was Testing on how whether my code worked so I did a button that runs the fetch and then displays it :: You can delete it as it appears to be retreiving the data properly */}
      <button onClick={test}>Test Button</button>
      <button onClick={test2}>RESET TEST</button>
      {messages.messages[0] && messages.messages[0].map(item => (
        <Test text={item.text} key={item.id} username={item.username} time={item.createdAt} like={item.likes}/>
      ))}
      {/* TESTING CODE :: CAN DELETE ^ */}
    </React.Fragment>
  );
};

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import getMessageById from '../../redux/actions/messages'
import { Loader } from "../loader";
import "./LoginForm.css";

export const LoginForm = ({ login }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const msg = useSelector(state => state.message)

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
  // TEST BELOW !!
  const Test = event => {
    //Below is example of successful fetch with an existing ID
    dispatch(getMessageById(5362))
    //Below is example of unsuccessful fetch to a message ID that does not exist
    // dispatch(getMessageById(1))
    console.log(msg)
  }
  //TEST ABOVE  can be deleted!!
  
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
      {/* Below is simply test code to test whether my functionality is working */}
      <button onClick={Test}>Test</button>
     {/* {msg.message[0].name === 'Error' ? <h3>{msg.message[0].name}</h3> : <p>{msg.message[0].message.text}</p>} */}
      {/* Code above is to test code and can be deleted */}
    </React.Fragment>
  );
};

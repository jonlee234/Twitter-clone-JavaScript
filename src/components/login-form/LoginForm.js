import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions, getMessages, getUserList, getMessageById } from "../../redux/actions";
import { Loader } from "../loader";
import "./LoginForm.css";
//import {postImage} from "../../redux/actions/postImage"

export const LoginForm = () => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));
  

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actions.login(state));
    dispatch(getUserList())
   dispatch(getMessages())
   dispatch(getMessageById(25800)) 
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

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
    </React.Fragment>
  );
};

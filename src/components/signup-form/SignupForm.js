import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/signup";
import {Link} from "react-router-dom"
import "./SignupForm.css";

export const SignupForm = ({ signup }) => {
  

  const { isSucsessful } = useSelector((state) => ({
    isSucsessful: state.signup.isSucsessful,
    
  }));

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    password: "",
    displayName: "",
    
  });

  const handleSignup = (event) => {
    event.preventDefault();
    dispatch(createUser(state));
    if (isSucsessful === true) {
      console.log("working");
    
    }
  }};

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <form id="login-form" onSubmit={handleSignup}>
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
        <label htmlFor="displayname">Display name</label>
        <input
          type="text"
          name="displayName"
          value={state.displayName}
          autoFocus
          required
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
      { isSucsessful ? <p>Sign up sucesss!! <Link to="/">Return Home</Link></p>:"Please sign up!"}
      
    </React.Fragment>
  );
};

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/signup";
import "./SignupForm.css";

export const SignupForm = ({ signup }) => {
  const { error } = useSelector((state) => ({
    
    error: state.error,
  }));

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    password: "",
    displayName: "",
  });

  const handleSignup = (event) => {
    event.preventDefault();
    dispatch(actions.createUser(state));
  };

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
        <button type="submit">
          Sign Up
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

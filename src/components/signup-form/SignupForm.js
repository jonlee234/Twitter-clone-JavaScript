import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
import { Loader } from "../loader";
=======
>>>>>>> ca9adf9c3eb8350712c138a86d193451c9acf91b
import "./SignupForm.css";
import { createUser } from "../../redux/actions/signup";
import "./SignupForm.css";

export const SignupForm = ({ signup }) => {
  const { loading, error, isSucsessful } = useSelector((state) => ({
    loading: state.loading,
    error: state.error,
    isSucsessful: state.signup.isSucsessful,
  })) 

 

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    password: "",
    displayName: "",
    message: "",
    
  });

  const handleSignup = (event) => {
    event.preventDefault();
    if(dispatch(state.createUser(state))){
      setState((prevState) => ({ ...prevState, message: "Registration successful, please login"}));
    dispatch(createUser(state));
    if (isSucsessful === true) {
      console.log("working");
    
    }
<<<<<<< HEAD
  }}
=======
  }};
>>>>>>> ca9adf9c3eb8350712c138a86d193451c9acf91b

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
        <label htmlFor="displayname">Display name</label>
        <input
          type="text"
          name="displayName"
          value={state.displayName}
          autoFocus
          required
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          Sign Up
        </button>
<<<<<<< HEAD
        </form>
      {/*
      {state.message ? state.message:null}
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
        <button type="submit">Sign Up</button>
      </form>
      { isSucsessful ? <p>Sign up sucesss!! <Link to="/">Return Home</Link></p>:"Please sign up!"} */}
=======
      </form>
      {/* {state.message ? state.message:null}
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
        <button type="submit">Sign Up</button>
      </form> 
      // { isSucsessful ? <p>Sign up sucesss!! <Link to="/">Return Home</Link></p>:"Please sign up!"}
      */}
     
>>>>>>> ca9adf9c3eb8350712c138a86d193451c9acf91b
      
    </React.Fragment>
  );
};

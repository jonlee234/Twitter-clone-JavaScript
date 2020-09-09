import React from "react";
import { LoginFormContainer, MenuContainer, GoogleLoginContainer} from "../components";


import { Link} from "react-router-dom"

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite micro blogging platform</h2>
    
    <LoginFormContainer />
    <p>Don't have an account? <Link to="/signup">Sign up Here</Link></p>

    <GoogleLoginContainer/>


  </>
);

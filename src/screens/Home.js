import React from "react";
import { LoginFormContainer, MenuContainer} from "../components";

import { Link} from "react-router-dom"

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    
    <LoginFormContainer />
    <p>Dont have an account? <Link to="/signup">Sign up Here</Link></p>


  </>
);

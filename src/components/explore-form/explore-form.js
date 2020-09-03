import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { actions } from "../../redux/actions/userlist";
import "./explore-form.css";


export const ExploreForm = () => {
    
  
    const dispatch = useDispatch();
  
    const [state, setState] = useState({
      users:[]
    });
  
    
   
    
  
  
    return (
      <React.Fragment>
        <div>{state.users}</div>
        
      </React.Fragment>
    );
    }


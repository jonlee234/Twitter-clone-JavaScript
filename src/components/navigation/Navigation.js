import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, ProfileScreen, NotFoundScreen ,SignupScreen, FeedScreen} from "../../screens";

import { ConnectedRoute } from "../connected-route/ConnectedRoute";
import { AboutScreen } from "../../screens/About";

export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      <ConnectedRoute
        exact
        path="/"
        redirectIfAuthenticated
        component={HomeScreen}
      />
      
      <ConnectedRoute
        exact 
        isProtected
        path="/about"
        component={AboutScreen}
      />
      <ConnectedRoute
        exact
        
        path="/profiles/:username"
        component={ProfileScreen}
      />
      <ConnectedRoute
        exact 
        //isProtected
        path="/messages"
        component={FeedScreen}
      />
      <ConnectedRoute
    
        path="/signup"
        redirectIfAuthenticated
        component={SignupScreen}
      />
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);

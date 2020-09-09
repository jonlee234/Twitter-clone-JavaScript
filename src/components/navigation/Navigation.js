import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, ProfileScreen, NotFoundScreen ,SignupScreen} from "../../screens";

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
        isProtected
        path="/profiles/:username"
        component={ProfileScreen}
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

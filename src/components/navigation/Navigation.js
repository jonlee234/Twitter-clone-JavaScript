import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, ProfileScreen, NotFoundScreen ,SignupScreen, FeedScreen, AboutScreen, ExploreScreen} from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";

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
        isProtected
        path="/messagefeed"
        component={FeedScreen}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/messagefeed?"
        component={FeedScreen}
      />
      <ConnectedRoute
    
        path="/signup"
        redirectIfAuthenticated
        component={SignupScreen}
      />
      <ConnectedRoute
      exact
        path="/explore"
        component={ExploreScreen}
      />
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);

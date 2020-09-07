import React from 'react';
import { GoogleLogin } from 'react-google-login';
 
 
export const GoogleLoginContainer = () => {
    
  const responseGoogle = (response) => {
      console.log(response)
  }

    return (
      <React.Fragment>
        <GoogleLogin
    clientId="166602026627-68pokdgg2o4g51lnnpjoj0ren91p6nnl.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
      </React.Fragment>
    );
  };
  
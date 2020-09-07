import React , {useState} from 'react';
import { GoogleLogin } from 'react-google-login';
 
 
export const GoogleLoginContainer = () => {
    

function App(){

  const [name, setNAme] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
}
const responseGoogle = (response) => {
  // setNAme(response.profileObj.name);
  // setEmail(response.profileObj.email);
  // setUrl(response.profileObj.imageUrl)
}
    return (
      <React.Fragment>
        {/* <div className = "App"></div> */}
        <h1>Login with Google</h1>
        {/* <h2>Welcome: {name}</h2> */}
        {/* <h2>Email: {email}</h2> */}
        {/* <img src = {url} alt ={name} /> */}
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
  
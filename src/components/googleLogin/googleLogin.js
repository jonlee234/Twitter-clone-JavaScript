
import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {  useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";


const CLIENT_ID = '166602026627-68pokdgg2o4g51lnnpjoj0ren91p6nnl.apps.googleusercontent.com';

const dispatch = useDispatch()
class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      token: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        token: response.accessToken
      }));
      dispatch(actions.login(this.state));
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      token: ''
    }));
  }
 
  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }
  
  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }

    </div>
    )
  }
}

export default GoogleBtn;

// export const GoogleLoginContainer = () => {
    
//   const [name, setNAme] = useState("");
//   const [email, setEmail] = useState("");
//   const [url, setUrl] = useState("");

// const responseGoogle = (response) => {
//   // setNAme(response.profileObj.name);
//   // setEmail(response.profileObj.email);
//   // setUrl(response.profileObj.imageUrl)
// }

// const { signOut, loaded } = useGoogleLogout({
//   jsSrc,
//   onFailure,
//   clientId,
//   cookiePolicy,
//   loginHint,
//   hostedDomain,
//   fetchBasicProfile,
//   discoveryDocs,
//   uxMode,
//   redirectUri,
//   scope,
//   accessType,
//   onLogoutSuccess
// })
//     return (
//       <React.Fragment>
//         {/* <div className = "App"></div> */}
//         <h1>Login with Google</h1>
//         {/* <h2>Welcome: {name}</h2> */}
//         {/* <h2>Email: {email}</h2> */}
//         {/* <img src = {url} alt ={name} /> */}
//         <GoogleLogin
//     clientId="166602026627-68pokdgg2o4g51lnnpjoj0ren91p6nnl.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//     cookiePolicy={'single_host_origin'}
//   />
//       </React.Fragment>
//     );
//   };
  
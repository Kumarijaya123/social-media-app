import './login.css'
import logo from '../../../assets/logo.jpg'
function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
              <img src={logo} alt="" className="logo" />
                <h3 className="loginLogo">EtmakChat</h3>
                <span className="loginDesc">
                    Connect with friends and the world round you on Etmakchat
                </span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                <input placeholder='Email' className="loginInput" />
                <input placeholder='Password' className="loginInput" />
                <button className='loginButton'>Log In</button>
                <span className="loginForget">Forget Password</span>
                <button className="loginRegisterButton">Create a New Account</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login
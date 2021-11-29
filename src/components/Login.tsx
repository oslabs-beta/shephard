import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";

//TO DO - need to hook up to the App level page and then create routes to redirect to Dashboard once username/pw are validated OR redirect to registration page which will then redirect back to this page when user has successfully registered

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false); //initial logic for checking username/pw switch

    // Need logic for submit to redirect to the dashboard
    const handleSubmit = (e: any) => {
        e.preventDefault(); //stop refresh
        //should this be a get or post request to verify user credentials?
        //use axios?

        if (email && password){
          setValid(true);
          // Need logic for submit to redirect to the dashboard
          return(
            <Dashboard />
          )
        }
        setSubmitted(true);
    }
    
    //useHistory hook does not currently work
    const handleRegister = () => {
      history.push('./Register');
    }

    return(
    <div className = "landing">
      <div className="heading">
        <i className="fab fa-wolf-pack-battalion shepherd-icon"></i>
          SHEPHERD
        </div>
        <div className="form-container">
          <p>LOGIN</p>
        <form className="register-form" onSubmit = {handleSubmit}>
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          value = {email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
        {submitted && !email ? <span className = "error-messages">Please enter an email address.</span> : null}
        <input
          id="password"
          className="form-field"
          type="password"
          placeholder="Password"
          value = {password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
        {submitted && !password ? <span className = "error-messages">Please enter a password.</span> : null}
        <button 
          type="submit" 
          onClick={handleSubmit}>
          Login
        </button>
        {/* Should redirect with React router to new sign up page */}
        <button 
          className="landing-button"
          onClick={handleRegister}>
          Register
         </button> 
        </form>
      </div>
    </div>
    )
}

export default Login;
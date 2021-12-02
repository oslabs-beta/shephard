import React, { useState } from "react";
//register and login should be conditionally rendered by the app component
const Login = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e:any) => {
      setSubmitted(true);
      e.preventDefault(); //avoid page refresh
      const reqParams = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          { 
            email,
            password,
          }
          ),
      };
      fetch ('/user/login', reqParams)
      .then((res) => res.json())
      .then((res) => {
        if (res.confirmed === true){
          console.log('User has logged in')
          //res.email
          //res.firstName
          //res.lastName
          //res.arn
          //set current view hook and set to dashboard
          props.setCurrentView('dashboard'); //drill down properly 
        }
        else{
          console.log('Something went wrong with user sign in')
          alert("Sorry, we could not find that username or password. Please try again or register for an account.")
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
    
    // send to register view if they need an account
    const handleRegister = () => {
      console.log("clicked register")
      //!make sure set current page is drilled
      props.setCurrentView('register');
    }

    return(
    <div className = "landing">
      <div className="heading">
        <i className="fab fa-wolf-pack-battalion shepherd-icon"></i>
          SHEPHERD
        </div>
        <div className="form-container">
        <form className="register-form" onSubmit = {handleSubmit}>
          <p className= "register-title">LOGIN</p>
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
          className="landing-button"
          type="submit" 
          onClick={(e) => handleSubmit(e)}>
          Login
        </button>
        <button 
          className="landing-button"
          onClick={() => handleRegister()}>
          Register
         </button> 
        </form>
      </div>
    </div>
    )
}

export default Login;
import React, { useState } from "react";
import Login from './Login';
//TO DO - 
//Login page should redirect here when button to register is clicked
//Upon successful registration user should be redirected back to login 
//Need to add all the logic for hooking up AWS account as well as storing that information into the db here

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmit] = useState(false);
    const [regionSelect, setRegion] = useState('us-east-2');
    const [arn, setArn] = useState('');
      // Need logic for submit to redirect to the dashboard
      const handleRegister = (e: any) => {
          e.preventDefault(); //stop refresh
          if (email && password && firstName && lastName){ //if all data present in state
            setSubmit(true);
            // Save into database somehow
            const reqParams = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, arn, regionSelect }),
            };
            /// after updating backend, need to fetch
           
            //Redirect back to login page
            return(
              <Login />
          )
         }
      }
  
      return(
      <div className= "landing">
        <div className= "heading">
        <i className="fab fa-wolf-pack-battalion shepherd-icon"></i> 
          SHEPHERD
        </div>
      <div className="form-container">
        <form className="register-form" onSubmit = {handleRegister}>
          <p className="register-text">REGISTER FOR AN ACCOUNT</p>
          {/* <i className="far fa-user"></i> */}
          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            value = {firstName}
            onChange={(e: any) => {
              setFirstName(e.target.value);
            }}
          />
          {submitted && !firstName ? <span className = "error-messages">Please enter your first name.</span> : null}
          {/* <i className="far fa-user"></i> */}
          <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            value = {lastName}
            onChange={(e: any) => {
              setLastName(e.target.value);
            }}
          />
          {submitted && !lastName ? <span className = "error-messages">Please enter your last name.</span> : null}
          {/* <i className="far fa-envelope"></i> */}
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
          {/* <i className="fas fa-unlock-alt"></i> */}
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
            onClick={handleRegister}>
            Register
          </button>
            {/* Need to add Amazon link logic and rendering info here */}

        </form>
      </div>
      </div>
      )
  }
  export default Register;
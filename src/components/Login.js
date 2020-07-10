import React, {useState, useEffect} from 'react';
import './Login.css';

/*
  For the purpose of testing the UI 

  * credentials will be compared against "admin" and "password"
  * 
*/


export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "", 
    password: ""
  });
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    // TODO - axios request to server with login credentials 
    // Valid credentials will receive a JWT token from server
    // Invalid credentials will recieve an error message, "username or password is invalid"
      // increase attempts by 1. After 3 attempts redirect user to home
      // run a timer for 1 minute that hides the submit button 
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted")
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={credentials.username} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={credentials.password} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

import React, {useState, useEffect} from 'react';
import './Login.css';
import axios from 'axios';


export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "", 
    password: ""
  });
  const [attempts, setAttempts] = useState(0);

  const handleChange = (e) => {
      e.persist();
      const newFormData = {
        ...credentials,
        [e.target.name]: e.target.value
      };
      setCredentials(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/api/auth/login', credentials)
      .then(response => {
        sessionStorage.setItem('token', JSON.stringify(response.data.token));
        // TODO - set isLoggedIn true state 
      })
      .catch(error => {
        console.log(error)
      })
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={credentials.username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={credentials.password} onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

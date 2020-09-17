// import React, {useState, useEffect} from 'react';
// import './css/Login.css';
// import axios from 'axios';


// export default function Login() {
//   const [credentials, setCredentials] = useState({
//     username: "", 
//     password: ""
//   });
//   const [attempts, setAttempts] = useState(0);

//   const handleChange = (e) => {
//       e.persist();
//       const newFormData = {
//         ...credentials,
//         [e.target.name]: e.target.value
//       };
//       setCredentials(newFormData);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post('http://localhost:8080/api/auth/login', credentials)
//       .then(response => {
//         sessionStorage.setItem('token', JSON.stringify(response.data.token));
//         sessionStorage.setItem('isLoggedIn', true)

//         // TODO: after admin has logged in... do this thing.... (HERE)

//       })
//       .catch(error => {
//         console.log(error)
//       })

//       // TODO: after admin has logged in... do this thing.... (OR HERE)

//     };

//   return (
//     <div className="login-form">
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" name="username" value={credentials.username} onChange={handleChange} />
//         </label>
//         <label>
//           Password:
//           <input type="password" name="password" value={credentials.password} onChange={handleChange} />
//         </label>
//         <button>Login</button>
//       </form>
//     </div>
//   );
// }

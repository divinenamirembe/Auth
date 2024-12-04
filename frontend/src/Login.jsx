import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Login () {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  // Handle input change for email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle input change for password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login
        console.log('Login successful:', data);
        navigate('/'); // Redirect to dashboard
      } else {
        // Handle error (e.g., incorrect credentials)
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className='form-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label><br/>
          <input type="text" placeholder="Enter email" name="email" onChange={handleEmailChange}/>
        </div>

        <div>
          <label htmlFor="password">Password</label><br/>
          <input type="password" placeholder="Enter password" name="password" onChange={handlePasswordChange}/>
        </div><br/>
          
          <button type='submit'>Login</button><br/>

          <p>Don't have an account? <Link to="/register"><strong>Sign up</strong></Link></p>

       
      </form>
    </div>
  )
}

export default Login
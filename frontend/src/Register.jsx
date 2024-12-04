import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Register () {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handle input change for email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle input change for password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
   };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful registration
        console.log('Registration successful:', data);
        navigate('/login'); // Redirect to login
      } else {
        // Handle error (e.g., email already exists)
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  return (
    <div className='form-container'>
       <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label><br/>
          <input type="text" placeholder="Enter name" name="name" onChange={handleNameChange}/>
        </div>

        <div>
          <label htmlFor="email">Email</label><br/>
          <input type="text" placeholder="Enter email" name="email" onChange={handleEmailChange}/>
        </div>

        <div>
          <label htmlFor="password">Password</label><br/>
          <input type="password" placeholder="Enter password" name="password" onChange={handlePasswordChange}/>
        </div><br/>
          
          <button type='submit'>Sign up</button><br/>

          <p>You agree to our terms and condition</p>

          <p>Already have an account, <Link to="/login"><strong>click here</strong></Link></p>
       
      </form>
    </div>
  )
}

export default Register
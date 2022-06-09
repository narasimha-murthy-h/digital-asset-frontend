import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:8000/login', {
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
    if (data.user) {
      localStorage.setItem('token', data.user);
      alert('Login successful');
      navigate('/fileUpload');
    } else {
      alert('Please check your username and password');
    }
  }

  return (
    <div className='main__container'>
      <div className='box'>
        <div className='login__container'>
          <div className='heading'>Login</div>
          <form onSubmit={loginUser}>
            <label className='label'>
              Email :
              <input
                className='input__container'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='Email'
              />
            </label>
            <br />
            <label className='label'>
              Password :
              <input
                className='input__container'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Password'
              />
            </label>
            <br />
            <input className='button' type='submit' value='Login' />
          </form>
          <Link to='/register'>Not Registered? Register here...</Link>
        </div>
      </div>
    </div>
  );
}

export default App;

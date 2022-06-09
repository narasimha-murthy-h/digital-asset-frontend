import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:8000/register', {
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

    if (data.status === 'ok') {
      navigate('/');
    }
  }

  return (
    <div className='main__container'>
      <div className='box'>
        <div className='login__container'>
          <div className='heading'>Register</div>
          <form onSubmit={registerUser}>
            <label className='label'>
              Name :
              <input
                className='input__container'
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                placeholder='Name'
              />
            </label>
            <br />
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
              PassWord :
              <input
                className='input__container'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Password'
              />
            </label>
            <br />
            <input className='button' type='submit' value='Register' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

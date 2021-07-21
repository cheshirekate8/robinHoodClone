import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import '../../styles/login-form.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-container'>
      <div className='left-login'>
        <img src='https://lh3.googleusercontent.com/proxy/Po85iLQWalAqj0ibuXzO9ZeZQkFhlTKiy-i8C14qmDEOcwNPFvXEqWUufU7iJzrm_cPbyHOu0iB6M6o3wwyHIfX31HmloWHKsKEywOkrK5Xr6v1TDyfW1Fa2ErFY'></img>
      </div>
      <div className='right-login'>
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <h1>Welcome to Zorro</h1>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default LoginForm;

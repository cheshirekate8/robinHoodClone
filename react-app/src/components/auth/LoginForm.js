import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import '../../styles/login-form.css';
import logo from '../../media/zorro_logo_RED.png';

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
        <img src='https://www.americaremembers.com/wp-content/uploads/2013/09/zorrologo.jpg'></img>
      </div>
      <div className='right-login'>
        <form className='login-form' onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <img src={logo} className='login-logo'></img>
          <h1>Welcome to Zorro</h1>
          <div class="form-input-material">
            <input
              name='email'
              type='text'
              placeholder='Email'
              className='login-input'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div class="form-input-material">
            <input
              name='password'
              type='password'
              placeholder='Password'
              className='login-input'
              value={password}
              onChange={updatePassword}
            />
          </div>
          <div>
            <button type='submit' className='btn'>Login</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default LoginForm;

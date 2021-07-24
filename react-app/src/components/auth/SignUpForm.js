import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import '../../styles/signup-form.css';
import logo from '../../media/zorro_logo_RED.png';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [balance, setBalance] = useState(100000.00);
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, firstName, lastName, parseFloat(balance)));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateBalance = (e) => {
    if (e.target.value === 'novice') {
      setBalance(100000.00)
    } else if (e.target.value === 'advanced') {
      setBalance(10000.00)
    } else if (e.target.value === 'expert') {
      setBalance(1000.00)
    }
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='form-container'>
      <form onSubmit={onSignUp}>
        <div className='signup-logo-container'>
          <img src={logo} className='signup-logo'></img>
        </div>
        <h1 className='signup-header'>Signup</h1>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div class="form-input-material">
          {/* <label className='signup-label'>Username</label> */}
          <input
            type='text'
            name='username'
            placeholder='Username'
            className='login-input'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div class="form-input-material">
          {/* <label className='signup-label'>Email</label> */}
          <input
            type='text'
            name='email'
            placeholder='Email'
            className='login-input'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div class="form-input-material">
          {/* <label className='signup-label'>First Name</label> */}
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            className='login-input'
            onChange={updateFirstName}
            value={firstName}
          ></input>
        </div>
        <div class="form-input-material">
          {/* <label className='signup-label'>Last Name</label> */}
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            className='login-input'
            onChange={updateLastName}
            value={lastName}
          ></input>
        </div>
        <div class="form-input-material select-container">
          <select
            onChange={updateBalance}
            className='signup-select'
          >
            <option value='novice'>Novice</option>
            <option value='advanced'>Advanced</option>
            <option value='expert'>Expert</option>
          </select>
        </div>
        <div class="form-input-material">
          {/* <label className='signup-label'>Password</label> */}
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='login-input'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div class="form-input-material">
          {/* <label className='signup-label'>Confirm Password</label> */}
          <input
            type='password'
            name='repeat_password'
            placeholder='Confirm Password'
            className='login-input'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div className='button-container'>
          <button type='submit' className='signup-btn'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

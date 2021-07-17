import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../store/session';

function DemoLogin() {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('demo@aa.io');
    const [password, setPassword] = useState('password');
    const dispatch = useDispatch();

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
        setErrors(data);
        }
    };

    return (
        <form onSubmit={onLogin}>
        <div>
            <button type='submit'>Demo</button>
        </div>
        </form>
    );
}

export default DemoLogin

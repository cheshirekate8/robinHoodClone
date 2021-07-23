import React, { useState } from 'react';
import * as sessionActions from '../store/session';
import { useDispatch } from 'react-redux';

function TransactionForm() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([])
        return dispatch(sessionActions.signUp({ username, email, password, confirmedPassword }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });

    }



    return (
        <div className='form-wrapper'>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='form-header'>Buy or Sell!</h1>
                {errors.length ?
                    <div className='errors'>
                        <ul>
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                    </div> : null
                }
                <div className='inputs-wrapper'>
                    <label>
                        Email:
                    </label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>
                        Username:
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label>
                        Password:
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label>
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        value={confirmedPassword}
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                        required
                    />
                </div>
                <div id={styles.signupBtnsDiv}>
                    <button className={styles.submitBtn} type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default TransactionForm;

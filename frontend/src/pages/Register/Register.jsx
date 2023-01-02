import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post('/auth/register', {
                username,
                email,
                password
            })

            return res.data && window.location.replace('/login');
        }
        catch (e) {
            setError(true);
        }
    }

    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>

                <label>Username</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} className='registerInput' placeholder='Enter your username...' />

                <label>Email</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} className='registerInput' placeholder='Enter your email...' />

                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className='registerInput' placeholder='Enter your password...' />

                <button className="registerButton" type='submit'>Register</button>

            </form>

            <button className="registerLoginButton">
                <Link to='/login' className='link'>login</Link>
            </button>

            {error && <span style={{ color: 'red', marginTop: '10px' }}>Something went wrong!</span>}

        </div >
    )
}

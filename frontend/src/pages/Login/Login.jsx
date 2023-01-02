import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';
import { useRef, useContext } from 'react';


export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value
      })

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
    }
    catch (e) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className='login'>
      <span className="loginTitle">Login</span>

      <form className="loginForm" onSubmit={handleSubmit}>

        <label>Username</label>
        <input type="text" className='loginInput' ref={userRef} placeholder='Enter your username...' />

        <label>Password</label>
        <input type="password" className='loginInput' ref={passwordRef} placeholder='Enter your password...' />

        <button className="loginButton" type='submit' disabled={isFetching}>
          Login
        </button>

      </form>

      <button className="loginRegisterButton">
        <Link to='/register' className='link'>Register</Link>
      </button>

    </div>
  )
}

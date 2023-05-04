import React, { useEffect } from 'react'
import './signinuser.css'
import { useState } from 'react';
import { getTokenLogin } from '../../Services/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogInPass } from '../../Redux/store';
import { actionLogInFail } from '../../Redux/store';
import { useNavigate } from 'react-router-dom';
import {recordOfTokenInLocalStorage} from '../../Services/localStorageManagement.js'

function SignInUser() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const stateRetrieved = useSelector((state) => state)
    const navigate = useNavigate();

    function submissionSignIn(event) {
      event.preventDefault()
      getTokenLogin(email,password).then(function(token){
        console.log('token='+token)
        dispatch(actionLogInPass(token))
        recordOfTokenInLocalStorage(token,rememberMe)
      })
      .catch(function(error){
        console.log('error: '+error)
        dispatch(actionLogInFail(error))
      })
    }


    useEffect(() =>{
      console.log('stateRetrieved.presentState='+stateRetrieved.presentState)
      if(stateRetrieved.presentState === 'online'){
        navigate('/User')
      }
    },[stateRetrieved,navigate])

    return (
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(event) => submissionSignIn(event)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(event) => setPassword(event.target.value)}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" onChange={(event) => setRememberMe(!rememberMe)}/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button> 
        </form>
      </section>
    )
}
  
export default SignInUser
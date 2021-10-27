import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { loadProfile } from './profileSlice'

export default function Login() {

    const [ username, setUsername ] = useState('puram')
    const [ password, setPassword ] = useState('12345678')

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { state } = useLocation();
    
    const profile = useSelector(state => state.profile);

    useEffect(() => {
        if(Object.keys(profile.user).length !== 0 && profile.user.constructor === Object) {
            navigate("/")
        }
    }, [profile.user, navigate])

    const loginUser = (username, password) => {
        dispatch(loadProfile({ username, password }))
        navigate(state?.from ? state.from : "/")
    }
    
    return (
        <div className="Login max-w-sm mx-auto my-4">
            <div className="container">
                <input 
                    type="text"
                    placeholder="enter username" 
                    className="input-field" 
                    value={username} onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="enter password" 
                    className="input-field" 
                    value={password} onChange={(e) => setPassword(e.target.value)} 
                />
                <button onClick={() => loginUser(username, password)} className="login-btn"> login </button>
            </div>
            <div className="signup-container">
                <Link to="/sign-up" className="sign-up-btn"> Sign Up </Link>
            </div>
        </div>
    )
}

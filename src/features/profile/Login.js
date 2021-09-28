import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router';
import { loadProfile } from './profileSlice'

export default function Login() {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

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
        navigate(state?.from)
    }
    
    return (
        <div className="Login max-w-sm mx-auto my-4">
            <input 
                type="text"
                placeholder="enter username" 
                className="border border-black block" 
                value={username} onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="enter password" 
                className="border border-black block" 
                value={password} onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={() => loginUser(username, password)}> login </button>
        </div>
    )
}

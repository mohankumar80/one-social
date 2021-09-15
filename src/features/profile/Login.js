import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { loadProfile } from './profileSlice'

export default function Login() {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const loginUser = (username, password) => {
        dispatch(loadProfile({ username, password }))
        navigate("/")
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

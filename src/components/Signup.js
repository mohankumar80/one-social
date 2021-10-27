import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { createNewUser } from '../features/profile/profileSlice'
import { useLocation, useNavigate } from 'react-router';


export default function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state }= useLocation();
    const [formDetails, setFormDetails] = useState({ name: '',username: '', password: '', email: '', about: '' })

    const setName = (event) => {
        setFormDetails(formData => {
            return { ...formData, name: event.target.value }
        })
    }

    const setUsername = (event) => {
        setFormDetails(formData => {
            return { ...formData, username: event.target.value }
        })
    }

    const setPassword = (event) => {
        setFormDetails(formData => {
            return { ...formData, password: event.target.value }
        })
    }

    const setEmail = (event) => {
        setFormDetails(formData => {
            return { ...formData, email: event.target.value }
        })
    }

    const setAbout = (event) => {
        setFormDetails(formData => {
            return { ...formData, about: event.target.value }
        })
    }
    
    const signupUser = () => {
        dispatch(createNewUser(formDetails));
        navigate(state?.from ? state.from : "/login")
    }

    return (
        <div className="Signup max-w-sm mx-auto my-4">
            <div className="container">
                <input 
                    type="text" 
                    placeholder="enter your name" 
                    className="input-field" 
                    value={formDetails.name}
                    onChange={(e) => setName(e)}
                />
                <input 
                    type="text"
                    placeholder="choose username" 
                    className="input-field" 
                    value={formDetails.username} onChange={(e) => setUsername(e)} 
                />
                <input 
                    type="password" 
                    placeholder="choose password" 
                    className="input-field" 
                    value={formDetails.password} onChange={(e) => setPassword(e)} 
                />
                <input 
                    type="email" 
                    placeholder="enter your email" 
                    className="input-field" 
                    value={formDetails.email}
                    onChange={(e) => setEmail(e)}
                />
                <textarea 
                    placeholder="about ?" 
                    className="input-field" 
                    value={formDetails.about} 
                    onChange={(e) => setAbout(e)}>
                </textarea>
                <button onClick={signupUser} className="login-btn"> Sign Up </button>
            </div>
            <div className="login-container">
                <Link to="/login" className="sign-up-btn"> Login </Link>
            </div>
        </div>
    )
}

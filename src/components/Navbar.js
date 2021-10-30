import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { logoutUser } from '../features/profile/profileSlice';

export default function Navbar() {

    const state = useSelector(state => state);
    const user = state.profile?.user;
    const dispatch = useDispatch();
    const navigate = useNavigate()
    console.log(user)

    const signoutUser = () => {
        dispatch(logoutUser())
        navigate("/login")
    }

    return (
        <div className="Navbar px-20 h-screen">
            <ul>
                <p className="text-2xl text-blue-700 font-bold mb-2"> One </p>
                <li className="nav-items">
                    <NavLink to="/" end className={({ isActive }) => ("nav-links" + (isActive ? " selected" : ""))}> Home </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/search" className={({ isActive }) => ("nav-links" + (isActive ? " selected" : ""))}> Search </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/posts" className={({ isActive }) => ("nav-links" + (isActive ? " selected" : ""))}> Posts </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/likes" className={({ isActive }) => ("nav-links" + (isActive ? " selected" : ""))}> Likes </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/profile" className={({ isActive }) => ("nav-links" + (isActive ? " selected" : ""))}> Profile </NavLink>
                </li>
            </ul>
            {
                Object.keys(user).length !== 0 && user.constructor === Object
                && <button className="bg-red-500 rounded-3xl text-white px-4 py-2" onClick={() => signoutUser()}> Log Out </button>
            }
        </div>
    )
}

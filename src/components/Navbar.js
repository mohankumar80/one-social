import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <ul className="Navbar px-20 h-screen">
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
            <Link to="/login"> login </Link>
        </ul>
    )
}

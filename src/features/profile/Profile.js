import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {

    const profile = useSelector(state => state.profile)
    const user = profile.user;
    
    return (
        <div key={user._id} className="Profile p-10">
            <p className="text-3xl font-bold">{user.name}</p>
            <p className="">@{user.username}</p>
            <p>About Me: {user.about}</p>
            <p>followers: {user.followers.length}</p>
            <p>following: {user.following.length}</p>
            <p>posts: {user.posts.length}</p>
            <p></p>
        </div>
    )
}

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchButtonPressed } from "./searchSlice";
import { followButtonPressed } from "../feed/feedSlice";

export default function Search() {

    const [searchUser, setSearchUser] = useState('');
    const dispatch = useDispatch()

    const search = useSelector(state => state.search)

    return (
        <div className="Search mx-24 my-4">
            <input 
                type="text" 
                className="w-4/5 focus:outline-none border-2 border-black rounded-l-full p-2" 
                placeholder="Search @username ....."
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
            />
            <button 
                className="border-2 border-l-0 border-black rounded-r-full py-2 px-4 focus:outline-none"
                onClick={() => dispatch(searchButtonPressed(searchUser))}
            > 
                search
            </button>
            {
                search.users.map(user => {
                    return <div key={user._id} className="border my-4 p-4 w-3/6 rounded shadow">
                        <p className="post-user">{user.name}</p>
                        <p className="post-username">@{user.username}</p>
                        <p>followers: {user.followers.length}</p>
                        <p>following: {user.following.length}</p>
                        <p>posts: {user.posts.length}</p>
                        <button 
                            className="bg-blue-700 focus:bg-blue-900 text-white px-4 py-2 rounded-full"
                            onClick={() => dispatch(followButtonPressed(user._id))}
                        > 
                            follow 
                        </button>
                    </div>
                })
            }
        </div>
    )
}

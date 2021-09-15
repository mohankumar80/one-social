import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from "./feedSlice";

export default function AddComment({ postId }) {

    const dispatch = useDispatch()
    const [comment, setComment] = useState('');

    return (
        <div className="AddComment px-2 py-8 mx-auto">
            <input 
                type="text" 
                className="w-4/5 focus:outline-none border-2 border-black rounded-l-full p-2" 
                placeholder="add comment!!"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button 
                className="border-2 border-l-0 border-black rounded-r-full py-2 px-4 focus:outline-none"
                onClick={() => dispatch(addComment({postId, comment}))}
                > 
                comment 
            </button>
        </div>
    )
}

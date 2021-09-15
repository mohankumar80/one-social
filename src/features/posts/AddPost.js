import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice';

export default function AddPost() {

    const [tweetContent, setTweetContent] = useState('');

    const dispatch = useDispatch();

    const changeTweetContent = (e) => {
        setTweetContent(e.target.value)
    }

    return (
        <div className="AddPost mx-7 mt-2 mb-4">
            <textarea 
                rows="2" 
                cols="95" 
                className="border-0 active:border-0 focus:outline-none mx-auto" 
                placeholder="what's happening ?"
                value={tweetContent}
                onChange={(e) => changeTweetContent(e)}
            >    
            </textarea>
            <button 
                className="block bg-blue-700 hover:bg-blue-900 px-4 py-2 rounded-full text-white" 
                onClick={() => {
                    dispatch(addPost(tweetContent))
                    setTweetContent("")
                    }
                }
            > 
                post 
            </button>
        </div>
    )
}

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadLikes } from './likesSlice';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Likes() {

    const state = useSelector(state => state);
    const likes = state.likes;
    const profile = state.profile;
    const userId = profile.user._id;

    const dispatch = useDispatch()

    useEffect(() => {
        if(likes.status === "idle") {
            dispatch(loadLikes(userId));
        }
    }, [userId, likes, dispatch])

    return (
        <div className="Likes">
            { likes.likes.length === 0 && <p className="text-center my-4 text-2xl font-bold">no liked posts ...</p> }
            {
                likes.likes.map(likedPost => {
                    return <div key={likedPost._id} className="post-card">
                        <p className="post-user">
                            {likedPost.userId.name} 
                            <span className="post-username">   @{likedPost.userId.username}</span>
                        </p>
                        <p>{likedPost.content}</p>
                        <button> 
                            <FontAwesomeIcon icon={faHeart} />
                            { likedPost.likes}
                        </button>
                    </div>
                })
            }
        </div>
    )
}

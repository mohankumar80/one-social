import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { likeButtonPressed, loadPosts } from "./postsSlice";
import { faHeart as farHeart, faComment as farComment } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Posts() {
    const state = useSelector(state => state);
    const posts = state.posts;
    const userId = state.profile.user._id;

    const dispatch = useDispatch();

    useEffect(() => {
        if(posts.status === "idle") {
            dispatch(loadPosts(userId));
        }
    }, [userId, posts, dispatch])
    
    return (
        <div className="Posts">
            {
                posts.posts.map(post => {
                    return <div key={post._id} className="post-card">
                        <p className="post-user">
                            {post.userId.name} 
                            <span className="post-username">   @{post.userId.username}</span>
                        </p>
                        <p>{post.content}</p>
                        <button>
                            <FontAwesomeIcon icon={farComment} /> 
                            {post.comments.length} 
                        </button>
                        <button className="ml-24" onClick={() => dispatch(likeButtonPressed(post._id))}> 
                            <FontAwesomeIcon icon={farHeart} />
                            {post.likes} 
                        </button>
                    </div>
                })
            }
            { posts.status === "failed" && <p>error occured !!</p> }
            { posts.status === "loading" && <h3 className="animate spin">loading ...</h3> }
        </div>
    )
}

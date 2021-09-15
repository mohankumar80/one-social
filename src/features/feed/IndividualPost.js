import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { faHeart as farHeart, faComment as farComment } from '@fortawesome/free-regular-svg-icons'
import { useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { likeButtonPressed } from "./feedSlice";
import { incrementLikesInLiked } from "../likes/likesSlice"
import AddComment from './AddComment';

export default function IndividualPost() {
    const { postId } = useParams();
    const feed = useSelector(state => state.feed);

    const dispatch = useDispatch();
    
    const post = feed.feed.find(userPost => 
        userPost._id === postId
        ? userPost
        : null
    )

    const incrementLikes = post => {
        dispatch(likeButtonPressed(post._id))
        dispatch(incrementLikesInLiked(post))
    }

    return (
        <div className="IndividualPost">
            <div className="post-card" key={post._id}>
                <p className="post-user">
                    { post.userId.name } 
                    <span className="post-username"> @{ post.userId.username } </span>
                </p>
                <p>{post.content}</p>
                <button>
                    <FontAwesomeIcon icon={farComment} />
                    {post.comments.length}
                </button>
                <button className="ml-24" onClick={() => incrementLikes(post)}>
                    <FontAwesomeIcon icon={farHeart} />
                    { post.likes }
                </button>
            </div>
            <AddComment postId={post._id} />
            {
                post.comments.map(userPostComment => {
                    return <div className="post-card" key={userPostComment._id}>
                        <p className="post-user">
                            { userPostComment.userId.name } 
                            <span className="post-username">   @{ userPostComment.userId.username }</span>
                        </p>
                        <p>{userPostComment.comment}</p>
                    </div>
                })
            }
        </div>
    )
}

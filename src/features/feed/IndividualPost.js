import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { faHeart as farHeart, faComment as farComment } from '@fortawesome/free-regular-svg-icons'
import { useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { likeButtonPressed, dislikeButtonPressed } from "./feedSlice";
import { incrementLikesInLiked, decrementLikesInLiked } from "../likes/likesSlice"
import AddComment from './AddComment';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { checkInLikes } from '../../utils';

export default function IndividualPost() {
    const { postId } = useParams();
    const state = useSelector(state => state);
    const feed = state.feed;
    const likes = state.likes
    const userId = state.profile.user._id;


    const dispatch = useDispatch();
    
    const post = feed.feed.find(userPost => 
        userPost._id === postId
        ? userPost
        : null
    )

    const incrementLikes = post => {
        const postId = post._id
        dispatch(likeButtonPressed({userId, postId}))
        dispatch(incrementLikesInLiked(post))
    }

    const decrementLikes = post => {
        const postId = post._id
        dispatch(dislikeButtonPressed({userId, postId}))
        dispatch(decrementLikesInLiked(post))
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
                {
                    checkInLikes(likes, post._id) === -1
                    ? <button className="ml-24" onClick={() => incrementLikes(post)}> 
                        <FontAwesomeIcon icon={farHeart} />
                        { post.likes} 
                    </button>
                    : <button className="ml-24" onClick={() => decrementLikes(post)}> 
                        <FontAwesomeIcon icon={faHeart} />
                        { post.likes} 
                    </button>
                }
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

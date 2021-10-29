import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart, faComment as farComment } from '@fortawesome/free-regular-svg-icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import AddPost from '../posts/AddPost';
import { dislikeButtonPressed, likeButtonPressed, loadFeed } from './feedSlice';
import { incrementLikesInLiked, decrementLikesInLiked } from "../likes/likesSlice";
import { checkInLikes } from '../../utils';

export default function Feed() {

    const state = useSelector(state => state);
    const feed = state.feed;
    const likes = state.likes;
    const profile = state.profile;
    const userId = profile.user._id;

    const dispatch = useDispatch()

    useEffect(() => {
        if(feed.status === "idle") {
            dispatch(loadFeed(userId));
        }
    }, [feed, dispatch, userId])

    const incrementLikes = post => {
        const postId = post._id;
        dispatch(likeButtonPressed({userId, postId}))
        dispatch(incrementLikesInLiked(post))   
    }

    const decrementLikes = post => {
        const postId = post._id
        dispatch(dislikeButtonPressed({userId, postId}))
        dispatch(decrementLikesInLiked(post))   
    }

    return (
        <div className="Feed">
            <AddPost />
            { feed.status !== "success" && <h3 className="text-center">loading ...</h3> }
            {
                feed.feed.map(feedPost => {
                    return <div key={feedPost._id} className="post-card">
                        <p className="post-user">{feedPost.userId.name} 
                            <span className="post-username">  @{feedPost.userId.username}</span>
                        </p>
                        <p>{feedPost.name} </p>
                        <Link to={`/post/${feedPost._id}`}>{feedPost.content}</Link>
                        <div className="btn-group">
                            <button> 
                                <FontAwesomeIcon icon={farComment} />
                                { feedPost.comments.length } 
                            </button>
                            {
                                checkInLikes(likes, feedPost._id) === -1
                                ? <button className="ml-24" onClick={() => incrementLikes(feedPost)}> 
                                    <FontAwesomeIcon icon={farHeart} />
                                    { feedPost.likes} 
                                  </button>
                                : <button className="ml-24" onClick={() => decrementLikes(feedPost)}> 
                                    <FontAwesomeIcon icon={faHeart} />
                                    { feedPost.likes} 
                                  </button>
                            }
                        </div>
                    </div>
                })
            }
        </div>
    )
}

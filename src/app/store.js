import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../features/feed/feedSlice";
import postsReducer from "../features/posts/postsSlice";
import likesReducer from "../features/likes/likesSlice";
import searchReducer from "../features/search/searchSlice";
import profileReducer from '../features/profile/profileSlice';

export const store = configureStore({
    reducer: {
        feed: feedReducer,
        posts: postsReducer,
        likes: likesReducer,
        search: searchReducer,
        profile: profileReducer
    }
})
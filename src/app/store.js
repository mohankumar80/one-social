import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../features/feed/feedSlice";
import postsReducer from "../features/posts/postsSlice";
import likesReducer from "../features/likes/likesSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
    reducer: {
        feed: feedReducer,
        posts: postsReducer,
        likes: likesReducer,
        search: searchReducer
    }
})
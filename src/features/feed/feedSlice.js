import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadFeed = createAsyncThunk("feed/loadFeed", async () => {
    const response = await axios.get(`https://one-social-backend.herokuapp.com/user/613c46496bc01f736e105515/feed`);
    console.log(response)
    return response.data;
})

export const likeButtonPressed = createAsyncThunk("feed/likeButtonPressed", async (postId) => {
    const response = await axios.put(`https://one-social-backend.herokuapp.com/user/613c46496bc01f736e105515/post/like-post/${postId}`)
    return response.data
})

export const dislikeButtonPressed = createAsyncThunk("fee/dislikeButtonPressed", async (postId) => {
    const response = await axios.patch(`https://one-social-backend.herokuapp.com/user/613c46496bc01f736e105515/post/like-post/${postId}`)
    return response.data;
})

export const addComment = createAsyncThunk("feed/addComment", async ({postId, comment}) => {
    const response = await axios.post(`https://one-social-backend.herokuapp.com/user/613c46496bc01f736e105515/post/comment/${postId}`, {
        comment
    })
    console.log(response)
    return response.data;
})

export const followButtonPressed = createAsyncThunk("search/followButtonPressed", async (userId) => {
    const response = await axios.post(`https://one-social-backend.herokuapp.com/user/613c46496bc01f736e105515/follow-user`, {
        toBeFollowedUserID: userId
    })
    return response.data;
})

export const feedSlice = createSlice({
    name: "feed",
    initialState: {
        status: "idle",
        feed: [],
        error: null
    },
    reducers: {},
    extraReducers: {
        [loadFeed.pending]: (state) => {
            state.status = "loading"
        },

        [loadFeed.fulfilled]: (state, action) => {
            state.status = "success"
            state.feed = action.payload.feed
        },

        [loadFeed.rejected]: (state, action) => {
            state.status = "failed"
        },

        [likeButtonPressed.pending]: (state) => {
            state.status = "loading"
        },

        [likeButtonPressed.fulfilled]: (state, action) => {
            state.status = "success"
            const postIndex = state.feed.findIndex(post => post._id === action.payload.likes._id)
            state.feed[postIndex].likes += 1;
        },

        [likeButtonPressed.rejected]: (state, action) => {
            state.status = "failed"
        },

        [dislikeButtonPressed.pending]: (state) => {
            state.status = "loading"
        },

        [dislikeButtonPressed.fulfilled]: (state, action) => {
            state.status = "success"
            const postIndex = state.feed.findIndex(post => post._id === action.payload.likes._id)
            state.feed[postIndex].likes -= 1;
        },

        [dislikeButtonPressed.rejected]: (state, action) => {
            state.status = "failed"
        },

        [addComment.pending]: (state) => {
            state.status = "loading"
        },

        [addComment.fulfilled]: (state, action) => {
            state.status = "success"
            const postIndex = state.feed.findIndex(post => post._id === action.payload.post._id)
            state.feed[postIndex] = action.payload.post
        },

        [addComment.rejected]: (state, action) => {
            state.status = "failed"
        },
        
        [followButtonPressed.pending]: (state) => {
            state.status = 'loading'
        },
        [followButtonPressed.fulfilled]: (state, action) => {
            state.status = 'success'
            state.feed.push(...action.payload.following.posts)
        },
        [followButtonPressed.rejected]: (state, action) => {
            state.status = 'failed'
        },
    }
})

export default feedSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPosts = createAsyncThunk("posts/loadPosts", async() => {
    const response = await axios.get(`https://one-social-backend.herokuapp.com/user/613c46496bc01f736e105515/post`);
    return response.data
})

export const addPost = createAsyncThunk("post/addPost", async (content) => {
    const response = await axios.post(`https://one-social-backend.herokuapp.com/user/613c46496bc01f736e105515/post`, {
        content
    })
    return response.data;
})

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        status: "idle",
        posts: [],
        error: null
    },
    reducers: {
        likeButtonPressed: (state, action) => {
            const postIndex = state.posts.findIndex(post => post._id === action.payload);
            state.posts[postIndex].likes += 1;
        }
    },
    extraReducers: {
        [loadPosts.pending]: (state) => {
            state.status = "loading"
        },

        [loadPosts.fulfilled]: (state, action) => {
            state.status = "success"
            state.posts = action.payload.posts
        },

        [loadPosts.rejected]: (state, action) => {
            state.status = "failed"
        },
        [addPost.pending]: (state) => {
            state.status = "loading"
        },

        [addPost.fulfilled]: (state, action) => {
            state.status = "success"
            state.posts.unshift(action.payload.post)
        },

        [addPost.rejected]: (state, action) => {
            state.status = "failed"
        }
    }
})

export const { likeButtonPressed } = postsSlice.actions;
export default postsSlice.reducer;
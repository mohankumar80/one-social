import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadLikes = createAsyncThunk("likes/loadLikes", async (userId) => {
    const response = await axios.get(`https://one-social-backend.herokuapp.com/user/${userId}/post/like-post`);
    return response.data;
})

export const likesSlice = createSlice({
    name: "likes",
    initialState: {
        status: "idle",
        likes: [],
        error: null
    },
    reducers: {
        incrementLikesInLiked: (state, action) => {
            const postIndex = state.likes.findIndex(post => String(post._id) === action.payload._id)
            if(postIndex === -1) {
                state.likes.push({...action.payload, likes: action.payload.likes + 1})
            } else {
                state.likes[postIndex].likes += 1;
            }
        },

        decrementLikesInLiked: (state, action) => {
            const postIndex = state.likes.findIndex(post => String(post._id) === action.payload._id)
            state.likes[postIndex].likes -= 1;
            state.likes = state.likes.filter(post => String(post._id) !== action.payload._id)
        }
    },
    extraReducers: {
        [loadLikes.pending]: (state) => {
            state.status = "loading"
        },

        [loadLikes.fulfilled]: (state, action) => {
            state.status = "success"
            state.likes = action.payload.likes
        },

        [loadLikes.rejected]: (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        }
    }
})

export const { incrementLikesInLiked, decrementLikesInLiked } = likesSlice.actions

export default likesSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadProfile = createAsyncThunk("profile/loadProfile", async ({username, password}) => {
    const response = await axios.post(`https://one-social-backend.herokuapp.com/user/login`, {
        username, password
    })
    return response.data;
})

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        status: "idle",
        user: {},
        error: null
    },
    reducers: {},
    extraReducers: {
        [loadProfile.pending]: (state) => {
            state.status = "loading"
        },
        [loadProfile.fulfilled]: (state, action) => {
            state.status = "success"
            state.user = action.payload.user
        },
        [loadProfile.rejected]: (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        }
    }
})

export default profileSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadProfile = createAsyncThunk("profile/loadProfile", async ({username, password}) => {
    const response = await axios.post(`https://one-social-backend.herokuapp.com/user/login`, {
        username, password
    })
    return response.data;
})

export const createNewUser = createAsyncThunk("profile/createNewUser", async({ name, username, password, email, about }) => {
    const response = await axios.post(`https://one-social-backend.herokuapp.com/user/signup`, {
        name, username, password, email, about
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
    reducers: {
        logoutUser: (state) => {
            state.status = "idle"
            state.user = {}
        }
    },
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
        },

        [createNewUser.pending]: (state) => {
            state.status = "loading"
        },
        [createNewUser.fulfilled]: (state) => {
            state.status = "success"
        },
        [createNewUser.rejected]: (state) => {
            state.status = "failed"
        }
    }
})

export const { logoutUser } = profileSlice.actions;

export default profileSlice.reducer;
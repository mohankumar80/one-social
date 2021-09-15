import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchButtonPressed = createAsyncThunk("search/searchButtonPressed", async (username) => {
    const response = await axios.post(`https://one-social-backend.herokuapp.com/user/613c46496bc01f736e105515/search-user`, {
        username
    })
    return response.data;
})

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        status: "idle",
        users: [],
        error: null
    },
    reducers: {},
    extraReducers: {
        [searchButtonPressed.pending]: (state) => {
            state.status = 'loading'
        },
        [searchButtonPressed.fulfilled]: (state, action) => {
            state.status = 'success'
            state.users = action.payload.users
        },
        [searchButtonPressed.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})


export default searchSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: { currentUser: null }
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action) {
            state.data.currentUser = action.payload
        },
        logout(state) {
            state.data.currentUser = null
        }
    },
});

export const {
    login,
    logout,
} = userSlice.actions;

export default userSlice.reducer;

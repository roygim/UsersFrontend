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
        },
        update(state, action) {
            state.data.currentUser = action.payload
        }
    },
});

export const {
    login,
    logout,
    update
} = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isExist: false,
};

const signUpErrorSlice = createSlice({
    name: "signUpError",
    initialState,
    reducers: {
        setSignUpError(state, action) {
            state.isExist = action.payload;
        },
    },
});

export const { setSignUpError } = signUpErrorSlice.actions;

export default signUpErrorSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../services/authApi";
import type { RootState } from "../store";

type AuthState = {
     user: User | null;
     token: string | null;
};

const initialState = {
     user: null,
     token: null,
};

const credentialsSlice = createSlice({
     name: "auth",
     initialState,
     reducers: {
          setCredentials(state, action) {
               state.user = action.payload.user;
               state.token = action.payload.token;
          },
     },
});

export const { setCredentials } = credentialsSlice.actions;

export default credentialsSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;

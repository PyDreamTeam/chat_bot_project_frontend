import { createUser, loginUser, logoutUser } from "@/src/api";
import { LOAD_STATUS } from "@/src/types";
import { CreateUserResponse } from "@/src/types/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "userAuth";

const fetchCreateUser = createAsyncThunk(`${SLICE_NAME}/fetchCreateUser`, createUser);

const fetchLogoutUser = createAsyncThunk(`${SLICE_NAME}/fetchLogoutUser`, logoutUser);

const fetchLoginUser = createAsyncThunk(`${SLICE_NAME}/fetchLoginUser`, loginUser);

export interface State {
     loadStatus: LOAD_STATUS;
     userCreate: CreateUserResponse;
}

const initialState: State = {
     loadStatus: LOAD_STATUS.UNKNOWN,
     userCreate: {
          email: "",
          emailNotification: false,
          first_name: "",
          last_name: "",
          user_role: "",
     },
};

const slice = createSlice({
     name: SLICE_NAME,
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder.addCase(fetchCreateUser.pending, (state) => {
               state.loadStatus = LOAD_STATUS.LOADING;
          });
          builder.addCase(fetchCreateUser.rejected, (state) => {
               state.loadStatus = LOAD_STATUS.ERROR;
          });
          builder.addCase(fetchCreateUser.fulfilled, (state, action) => {
               state.loadStatus = LOAD_STATUS.LOADED;
               state.userCreate = action.payload;
               localStorage.setItem("userData", JSON.stringify(action.payload));
          });

          builder.addCase(fetchLogoutUser.pending, (state) => {
               state.loadStatus = LOAD_STATUS.LOADING;
          });
          builder.addCase(fetchLogoutUser.rejected, (state) => {
               state.loadStatus = LOAD_STATUS.ERROR;
          });
          builder.addCase(fetchLogoutUser.fulfilled, (state, action) => {
               state.loadStatus = LOAD_STATUS.LOADED;
               console.log("action", action);
          });

          builder.addCase(fetchLoginUser.pending, (state) => {
               state.loadStatus = LOAD_STATUS.LOADING;
          });
          builder.addCase(fetchLoginUser.rejected, (state) => {
               state.loadStatus = LOAD_STATUS.ERROR;
          });
          builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
               state.loadStatus = LOAD_STATUS.LOADED;
               state.userCreate = action.payload;
               localStorage.setItem("loginUser", JSON.stringify(action.payload));
          });
     },
});

export const reducer = slice.reducer;

export const actions = {
     ...slice.actions,
     fetchCreateUser,
     fetchLogoutUser,
     fetchLoginUser,
};

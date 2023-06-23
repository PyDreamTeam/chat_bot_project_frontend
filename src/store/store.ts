import { configureStore } from "@reduxjs/toolkit";
import signUpError from "./reducers/signUpError";
import { authApi } from "./services/authApi";
import credentialsSlice from "./reducers/credentialsSlice";
import {reducer as userAuthReducer} from "./userAuth/sliceUser";

export const store = configureStore({
     reducer: {
          [authApi.reducerPath]: authApi.reducer,
          signUpError,
          credentialsSlice,
          userAuthReducer
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

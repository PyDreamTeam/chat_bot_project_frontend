import { configureStore } from "@reduxjs/toolkit";
import signUpError from "./reducers/signUpError";
import { authApi } from "./services/authApi";
import credentialsSlice from "./reducers/credentialsSlice";

export const store = configureStore({
     reducer: {
          [authApi.reducerPath]: authApi.reducer,
          signUpError,
          credentialsSlice,
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

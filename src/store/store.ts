import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import authReducer from "./reducers/credentialsSlice";

export const store = configureStore({
     reducer: {
          [authApi.reducerPath]: authApi.reducer,
          auth: authReducer,
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

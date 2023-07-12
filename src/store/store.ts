import { configureStore } from "@reduxjs/toolkit";
import signUpError from "./reducers/signUpError";
import { authApi } from "./ser/authApi";
import credentialsSlice from "./reducers/credentialsSlice";
import {reducer as userAuthReducer} from "./userAuth/sliceUser";
import { userAuth } from "./services/userAuth";

export const store = configureStore({
     reducer: {
          [authApi.reducerPath]: authApi.reducer,
          signUpError,
          credentialsSlice,
          userAuthReducer,
          [userAuth.reducerPath]: userAuth.reducer
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuth.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

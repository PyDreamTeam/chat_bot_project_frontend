import { configureStore } from "@reduxjs/toolkit";
import signUpError from "./reducers/signUpError";
import credentialsSlice from "./reducers/credentialsSlice";
import { userAuth } from "./services/userAuth";

export const store = configureStore({
     reducer: {
          signUpError,
          credentialsSlice,
          [userAuth.reducerPath]: userAuth.reducer
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuth.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { platforms } from "./services/platforms";
import { solutions } from "./services/solutions";
import { configureStore } from "@reduxjs/toolkit";
import signUpError from "./reducers/signUpError";
import credentialsSlice from "./reducers/credentialsSlice";
import { userAuth } from "./services/userAuth";
import { reducerFilters } from "./reducers/platforms/slice";

export const store = configureStore({
    reducer: {
        reducerFilters,
        signUpError,
        credentialsSlice,
        [userAuth.reducerPath]: userAuth.reducer,
        [platforms.reducerPath]: platforms.reducer,
        [solutions.reducerPath]: solutions.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuth.middleware, platforms.middleware, solutions.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { reducerAddPlatform } from "./reducers/addPlatform/slice";
import { platforms } from "./services/platforms";
import { solutions } from "./services/solutions";
import { configureStore } from "@reduxjs/toolkit";
import signUpError from "./reducers/signUpError";
import credentialsSlice from "./reducers/credentialsSlice";
import { changeRole } from "./services/changeRole";
import { userAuth } from "./services/userAuth";
import { reducerFilters } from "./reducers/platforms/slice";
import { reducerSolutions } from "./reducers/solutions/slice";

export const store = configureStore({
    reducer: {
        reducerFilters,
        reducerAddPlatform,
        signUpError,
        credentialsSlice,
        reducerSolutions,
        [changeRole.reducerPath]: changeRole.reducer,
        [userAuth.reducerPath]: userAuth.reducer,
        [platforms.reducerPath]: platforms.reducer,
        [solutions.reducerPath]: solutions.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(changeRole.middleware, userAuth.middleware, platforms.middleware, solutions.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

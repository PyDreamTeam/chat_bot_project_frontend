import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Solutions {
    id: number;
    tag: string;
}

interface State {
    solutions: Solutions[];
}

const initialState: State = {
    solutions: [],
};

const solutionsSlice = createSlice({
    name: "solutions",
    initialState,
    reducers: {},
});

// eslint-disable-next-line no-empty-pattern
// export const { } = filtersSlice.actions;
export const reducerSolutions = solutionsSlice.reducer;

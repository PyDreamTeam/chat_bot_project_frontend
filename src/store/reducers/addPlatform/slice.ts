import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Filters {
    id: number;
    tag: string;
    filter?: string;
}

interface State {
    filters: Filters[];
    links_to_solution: string[];
    turnkey_solutions: number;
    linkToPlatform: string
}

const initialState: State = {
    filters: [],
    links_to_solution: [],
    turnkey_solutions: 0,
    linkToPlatform: ""
};

const addPlatformSlice = createSlice({
    name: "addPlatform",
    initialState,
    reducers: {
        countLinkToSolution: (state, action: PayloadAction<string[]>) => {
            const linkToSolution = action.payload.map(item => "https://" + item);
            state.links_to_solution = linkToSolution;
        },
        linkToPlatform: (state, action: PayloadAction<string>) => {
            state.linkToPlatform = "https://" + action.payload;
        },
        addFilterForPlatform: (state, action: PayloadAction<{id: number; tag: string}>) => {
            const isFilterInStore = state.filters.find((item) => item.id === action.payload.id);
            if(!isFilterInStore) {
                state.filters = [...state.filters, action.payload];
            }
        },
        deleteFilterFromPlatform: (state, action: PayloadAction<number>) => {
            state.filters = state.filters.filter((item) => item.id !== action.payload);
        }
    },
});

export const { countLinkToSolution, addFilterForPlatform, deleteFilterFromPlatform, linkToPlatform } = addPlatformSlice.actions;
export const reducerAddPlatform = addPlatformSlice.reducer;

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
            if(action.payload) {
                const linkToSolution = action.payload.map(item => item);
                state.links_to_solution = linkToSolution;
            }
        },
        getLinkToSolution: (state, action) => {
            if(action.payload === null) {
                action.payload = [];
                state.links_to_solution = action.payload;
            }
            state.links_to_solution = action.payload;
        },
        linkToPlatform: (state, action: PayloadAction<string>) => {
            state.linkToPlatform = action.payload;
        },
        getLinkToPlatform: (state, action) => {
            if(action.payload){
                const link = action.payload.replace("https://", "");
                state.linkToPlatform = link;
            }
            
        },
        addFilterForPlatform: (state, action: PayloadAction<{id: number; tag: string}>) => {
            const isFilterInStore = state.filters.find((item) => item.id === action.payload.id);
            if(!isFilterInStore) {
                state.filters = [...state.filters, action.payload];
            }
        },
        deleteFilterFromPlatform: (state, action: PayloadAction<number>) => {
            state.filters = state.filters.filter((item) => item.id !== action.payload);
        },
        getFilterFromBack: (state, action) => {
            state.filters = action.payload;
        },
        deleteAllFiltersFromPlatform: (state) => {
            state.filters = [];
        }
    },
});

export const { 
    countLinkToSolution,
    getLinkToSolution,
    addFilterForPlatform,
    deleteFilterFromPlatform,
    linkToPlatform,
    getLinkToPlatform,
    deleteAllFiltersFromPlatform,
    getFilterFromBack
} = addPlatformSlice.actions;
export const reducerAddPlatform = addPlatformSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Filters {
    id: number;
    tag: string;
    filter?: string;
}
// interface Steps {
//     id: number;
//     step_title: string;
//     step_description:string;
// }
// interface Cards {
//     id: number;
//     card_img: string;
//     card_title: string;
//     card_description:string;
// }

interface State {
    filters: Filters[];
    // cards: Cards[];
    // steps: Steps[];
    links_to_platform: string[];
    turnkey_platforms: number;
    linkToSolution: string;
}

const initialState: State = {
    filters: [],
    // cards: [],
    // steps: [],
    links_to_platform: [],
    turnkey_platforms: 0,
    linkToSolution: "",
};

const addSolutionSlice = createSlice({
    name: "addSolution",
    initialState,
    reducers: {
        countLinkToPlatform: (state, action: PayloadAction<string[]>) => {
            if (action.payload) {
                const linkToPlatform = action.payload.map((item) => item);
                state.links_to_platform = linkToPlatform;
            }
        },
        getLinkToPlatform: (state, action) => {
            if (action.payload === null) {
                action.payload = [];
                state.links_to_platform = action.payload;
            }
            state.links_to_platform = action.payload;
        },
        linkToSolution: (state, action: PayloadAction<string>) => {
            state.linkToSolution = action.payload;
        },
        getLinkToSolution: (state, action) => {
            if (action.payload) {
                const link = action.payload.replace("https://", "");
                state.linkToSolution = link;
            }
        },
        addFilterForSolution: (state, action: PayloadAction<{ id: number; tag: string }>) => {
            const isFilterInStore = state.filters.find((item) => item.id === action.payload.id);
            if (!isFilterInStore) {
                state.filters = [...state.filters, action.payload];
            }
        },
        deleteFilterFromSolution: (state, action: PayloadAction<number>) => {
            state.filters = state.filters.filter((item) => item.id !== action.payload);
        },
        getFilterFromBack: (state, action) => {
            state.filters = action.payload;
        },
        // getStepsFromBack: (state, action) => {
        //     state.steps = action.payload;
        // },
        // getCardsFromBack: (state, action) => {
        //     state.cards = action.payload;
        // },
        deleteAllFiltersFromSolution: (state) => {
            state.filters = [];
        },
    },
});

export const {
    countLinkToPlatform,
    getLinkToSolution,
    addFilterForSolution,
    deleteFilterFromSolution,
    linkToSolution,
    getLinkToPlatform,
    deleteAllFiltersFromSolution,
    getFilterFromBack,
} = addSolutionSlice.actions;
export const reducerAddSolution = addSolutionSlice.reducer;

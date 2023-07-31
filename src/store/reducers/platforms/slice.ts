import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
    id: number
    tag: string
}

const initialState: {filters: State[]} = {
     filters: []
};

const filtersSlice = createSlice({
     name: "filters",
     initialState,
     reducers: {
          addFilters: (state, action: PayloadAction<{id: number, tag: string }>) => {
               state.filters = [...state.filters, state.filters.includes(action.payload) ? action.payload : action.payload];
               //    state.filters = [...state.filters, action.payload];
          },
          deleteFilters: (state, action: PayloadAction<number>) => {
               state.filters = [...state.filters.filter((item) => item.id !== action.payload)];
          }
     }
});

export const {addFilters, deleteFilters} = filtersSlice.actions;
export const reducerFilters = filtersSlice.reducer;
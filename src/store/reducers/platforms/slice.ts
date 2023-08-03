import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
    id: number
    tag: string
    filter?: string
}

const initialState: {filters: State[]} = {
     filters: []
};

const filtersSlice = createSlice({
     name: "filters",
     initialState,
     reducers: {
          addFilters: (state, action: PayloadAction<{id: number, tag: string, filter?: string }>) => {
               const isFilterInStore = state.filters.find((item) => item.id === action.payload.id);

               if (!isFilterInStore) {
                    state.filters = [...state.filters, action.payload];
               }
          },
          deleteFilters: (state, action: PayloadAction<number>) => {
               state.filters = state.filters.filter((item) => item.id !== action.payload);
          },
          deleteAllFilters: (state) => {
               state.filters = [];
          }
     }
});

export const {addFilters, deleteFilters, deleteAllFilters} = filtersSlice.actions;
export const reducerFilters = filtersSlice.reducer;
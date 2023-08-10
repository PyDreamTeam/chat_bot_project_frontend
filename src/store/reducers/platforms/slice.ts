import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Filters {
    id: number
    tag: string
    filter?: string
}

interface State {
     filters: Filters[]
     min_price: number
     max_price: number
}

const initialState: State = {
     filters: [],
     min_price: 0,
     max_price: 0
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
          },
          minimalPrice: (state, action) => {
               state.min_price = action.payload;
          },
          maximalPrice: (state, action) => {
               state.max_price = action.payload;
          }
     }
});

export const {addFilters, deleteFilters, deleteAllFilters, minimalPrice, maximalPrice} = filtersSlice.actions;
export const reducerFilters = filtersSlice.reducer;
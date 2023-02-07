import { createSlice } from '@reduxjs/toolkit';

export const FilterSlice = createSlice({
  name: 'filter',
  initialState: { status: '' },
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = FilterSlice.actions;
export const FiltersReducer = FilterSlice.reducer;
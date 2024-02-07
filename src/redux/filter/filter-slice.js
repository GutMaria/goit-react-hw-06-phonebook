import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(_, { payload }) {
      return payload;
      // state.filter = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

const filterReducer = filterSlice.reducer;

export default filterReducer;

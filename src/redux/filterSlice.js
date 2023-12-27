import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter',

  initialState: '',

  reducers: {
    changeFilter(state, action) {
      return `${action.payload}`;
    },
    filterByName(state, action) {},
  },
});
export const { changeFilter, filterByName } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

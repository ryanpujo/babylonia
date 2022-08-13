import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    searchParameter: '',
  },
  reducers: {
    search: (state, action) => {
      state.searchParameter = action.payload;
    },
  },
});

export const headerAction = headerSlice.actions;
export default headerSlice;

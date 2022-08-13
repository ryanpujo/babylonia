import { createSlice } from '@reduxjs/toolkit';
const productPageSlice = createSlice({
  name: 'productPage',
  initialState: {
    imagePath: '',
  },
  reducers: {
    setImagePath: (state, action) => {
      state.imagePath = action.payload;
    },
  },
});

export const productPageAction = productPageSlice.actions;
export default productPageSlice;

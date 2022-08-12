import { configureStore } from '@reduxjs/toolkit';
import productPageSlice from './product-page';

const store = configureStore({
  reducer: {
    productPage: productPageSlice.reducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

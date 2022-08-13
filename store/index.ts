import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './header';
import productPageSlice from './product-page';
import productsSlice from './products';

const store = configureStore({
  reducer: {
    productPage: productPageSlice.reducer,
    header: headerSlice.reducer,
    products: productsSlice.reducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

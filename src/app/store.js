import { configureStore } from '@reduxjs/toolkit';
import toolkit from './slice';

export const store = configureStore({
  reducer: {
    toolkit: toolkit,
  },
});

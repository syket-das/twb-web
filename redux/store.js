import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './features/theme/themeSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
setupListeners(store.dispatch);

import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './features/theme/themeSlice';
import authReducer from './features/auth/authSlice';
import userReducer from './features/user/userSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
setupListeners(store.dispatch);
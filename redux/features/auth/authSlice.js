import { createSlice } from '@reduxjs/toolkit';
import { auth } from '@/config/firebase';

import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { store } from '@/redux/store';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    store.dispatch(setLoading(true));
    const result = await signInWithPopup(auth, provider);
    store.dispatch(setLoading(false));
    return store.dispatch(setUser(result.user));
  } catch (error) {
    store.dispatch(setLoading(false));
    return store.dispatch(setError(error));
  }
};

export const logOut = async () => {
  try {
    store.dispatch(setLoading(true));
    await signOut(auth);
    store.dispatch(setLoading(false));
    return store.dispatch(setUser(null));
  } catch (error) {
    store.dispatch(setLoading(false));
    return store.dispatch(setError(error));
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },

    setError(state, action) {
      state.error = action.payload.code || action.payload.message || null;

      setTimeout(() => {
        store.dispatch(clearError());
      }, 5000);
    },

    clearError(state) {
      state.error = null;
    },
  },
});

export const { setUser, setLoading, setError, clearError } = authSlice.actions;

export default authSlice.reducer;

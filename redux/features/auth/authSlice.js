import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { firebase_app } from '@/config/firebase';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
export const auth = getAuth(firebase_app);

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const signInWithGoogle = createAsyncThunk(
  'auth/signInWithGoogle',
  async (thunkApi) => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (thunkApi) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

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
  },

  extraReducers: (builder) => {
    builder.addCase(signInWithGoogle.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(signInWithGoogle.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Sign in with Google failed';
    });

    builder.addCase(logOut.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.loading = false;
      state.user = null;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

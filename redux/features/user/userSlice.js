import { createSlice } from '@reduxjs/toolkit';
import { auth, db } from '@/config/firebase';
import { store } from '@/redux/store';

const initialState = {
  userDetails: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
});

export const { clearError } = userSlice.actions;

export default userSlice.reducer;

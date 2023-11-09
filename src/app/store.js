import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import experienceSlice from '../features/experienceSlice';
import educationSlice from '../features/educationSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    experience: experienceSlice,
    education : educationSlice,
  },
});

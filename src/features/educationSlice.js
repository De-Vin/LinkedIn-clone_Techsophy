import { createSlice } from '@reduxjs/toolkit';

const initialObject = {
  College: 'RGUKT',
  Degree: 'B.Tech',
  Duration: '2018-2022',
  Location: 'Nuzvid',
};

// Retrieve data from localStorage if available
const storedData = JSON.parse(localStorage.getItem('educationData')) || [initialObject];

const initialState = {
  value: storedData,
};

export const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    addeducation: (state, action) => {
      const newObject = action.payload;
      state.value = [...state.value, newObject];
      localStorage.setItem('educationData', JSON.stringify(state.value));
    },
    removeeducation: (state, action) => {
      const index = action.payload;
      state.value = state.value.filter((_, ind) => index !== ind);
      localStorage.setItem('educationData', JSON.stringify(state.value));
    },
    editeducation: (state, action) => {
      const { index, updatedObject } = action.payload;
      state.value[index] = updatedObject;
      localStorage.setItem('educationData', JSON.stringify(state.value));
    },
  },
});

export const { addeducation, removeeducation, editeducation } = educationSlice.actions;
export const selectEducation = (state) => state.education.value;

export default educationSlice.reducer;

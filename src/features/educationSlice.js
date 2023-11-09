import { createSlice } from '@reduxjs/toolkit';

const initialObject = {
  College: 'RGUKT',
  Degree: 'B.Tech',
  Duration: '2018-2022',
  Location: 'Nuzvid',
};

const initialState = {
  value: [initialObject],
};

export const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    addeducation: (state, action) => {
      const newObject = action.payload;
      state.value = [...state.value, newObject];
    },
    removeeducation: (state, action) => {
      const index = action.payload;
      state.value = state.value.filter((_, ind) => index !== ind);
    },
    editeducation: (state, action) => {
      const { index, updatedObject } = action.payload;
      state.value[index] = updatedObject;
    },
  },
});

export const { addeducation, removeeducation, editeducation } = educationSlice.actions;
export const selectEducation = (state) => state.education.value;

export default educationSlice.reducer;

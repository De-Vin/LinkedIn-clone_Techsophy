import { createSlice } from '@reduxjs/toolkit';
 
const initialObject = {
  Role: 'Software Engineer Intern',
  CompanyName: 'Techsophy',
  Duration: '3',
  Location: 'Hyderabad',
  Description: 'I have gained the skill of developing a webpage with ReactJs. As a ReactJs Intern designs and implements user interface components for JavaScript-based web applications using the React open-source library ecosystem.',
};
 
const initialState = {
  value: [initialObject,],
};
 
export const experienceSlice = createSlice({
  name: 'Experience',
  initialState,
  reducers: {
    addNew: (state, action) => {
      const newObject = action.payload;
      state.value = [...state.value, newObject];
    },
    remove: (state, action) => {
      const index = action.payload;
      state.value = state.value.filter((_, ind) => index !== ind);
    },
    edit: (state, action) => {
      const { index, updatedObject } = action.payload;
      state.value[index] = updatedObject;
    },
  },
});
 
export const { addNew, remove, edit } = experienceSlice.actions;
export const selectExperience = (state) => state.experience.value;
 
export default experienceSlice.reducer;
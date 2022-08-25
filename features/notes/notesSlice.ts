import { createSlice } from "@reduxjs/toolkit";

export interface Note {
  id: string;
  time: string;
  title?: string;
  content?: string;
}

const initialValue: Note[] = [];
export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    value: initialValue,
  },
  reducers: {
    createNote: (state, action) => {
      state.value.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateNote: (state, action) => {
      let element = state.value.find((item) => item.id === action.payload.id);
      element = action.payload;
    },
    deleteAll: (state) => {
      state.value.length = 0;
    },
  },
});

export default notesSlice.reducer;
export const { createNote } = notesSlice.actions;

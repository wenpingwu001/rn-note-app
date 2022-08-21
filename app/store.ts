import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "../features/notes/notesSlice";

export default configureStore({
  reducer: {
    notes: notesSlice,
  },
});

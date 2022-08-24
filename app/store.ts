import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "../features/notes/notesSlice";

const store = configureStore({
  reducer: {
    notes: notesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

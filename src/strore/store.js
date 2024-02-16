import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './auth/auth.slice'

export const store = configureStore({
  reducer: {
    auth: counterSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './slices/counterSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { pokemonsReducer } from './pokemons/pokemons'
import { localStorageMiddleware } from './middlewares'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

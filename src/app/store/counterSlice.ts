import { createSlice } from '@reduxjs/toolkit'
import { count } from 'console'
interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 5
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    }
  }
})

export const {} = counterSlice.actions

export const counterReducer = counterSlice.reducer

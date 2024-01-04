import { SimplePokemon } from '@/pokemons'
import { createSlice } from '@reduxjs/toolkit'

interface favoritePoemons {
  [key: string]: SimplePokemon
}
const initialState = {
  '1': { id: '1', name: 'bulbasaur' }
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
})

export const {} = pokemonsSlice.actions

export const pokemonsReducer = pokemonsSlice.reducer

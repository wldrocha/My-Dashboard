import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons'

interface favoritePokemons {
  favorites: { [key: string]: SimplePokemon }
}

const getInitialState = (): favoritePokemons => {
  if (typeof localStorage === 'undefined') return {}

  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
  return favorites
}
const initialState: favoritePokemons = {
  // ...getInitialState()
  favorites: {}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload
      const { id } = pokemon
      if (!!state.favorites[id]) {
        delete state.favorites[id]
        return
      }
      state.favorites[id] = pokemon
    },
    setFavorites: (state, action: PayloadAction<{ [key: string]: SimplePokemon }>) => {
      state.favorites = action.payload
    }
  }
})

export const { setFavorites, toggleFavorite } = pokemonsSlice.actions

export const pokemonsReducer = pokemonsSlice.reducer

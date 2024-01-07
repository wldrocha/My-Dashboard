'use client'

import { useAppSelector } from '@/app/store'

import { PokemonGrid } from '..'
import { useState } from 'react'

export const PokemonFavorites = () => {
  const pokemonsList = useAppSelector((state) => Object.values(state.pokemons.favorites))

  // const [favoritePokemonsList, setFavoritePokemonsList] = useState(pokemonsList)

  return <PokemonGrid pokemons={pokemonsList} />
}

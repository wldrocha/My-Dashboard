'use client'
import { Provider } from 'react-redux'
import { store } from './'
import { useEffect } from 'react'
import { setFavorites } from './pokemons/pokemons'

interface Props {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favoritesPokemons = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
    store.dispatch(setFavorites(favoritesPokemons))
  }, [])

  return <Provider store={store}>{children}</Provider>
}

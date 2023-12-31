import React from 'react'
import { PokemonCard, SimplePokemon } from '..'

interface Props {
  pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className='flex flex-wrap gap-5 items-MdCenterFocusStrong justify-center'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  )
}

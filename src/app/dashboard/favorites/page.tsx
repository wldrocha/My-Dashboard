import { PokemonGrid, PokemonResponse, SimplePokemon } from '@/pokemons'

export const metadata = {
  title: 'Favorites',
  description: 'Favorites page'
}

export default function FavoritePage() {
  return (
    <>
      <div className='flex flex-col'>
        <h1 className='text-4xl font-bold text-center'>Global state</h1>
        {/* <PokemonGrid pokemons={pokemonsList} /> */}
      </div>
    </>
  )
}

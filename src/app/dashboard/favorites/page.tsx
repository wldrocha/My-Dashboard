import { PokemonFavorites } from '@/pokemons'

export const metadata = {
  title: 'Favorites',
  description: 'Favorites page'
}

export default function FavoritePokemonsPage() {
  return (
    <>
      <div className='flex flex-col'>
        <h1 className='text-4xl font-bold text-center'>Favorite Pokemons with global redux state</h1>
        {/* <PokemonGrid pokemons={pokemonsList} /> */}
        <PokemonFavorites />
      </div>
    </>
  )
}

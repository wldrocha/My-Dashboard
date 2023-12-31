import { PokemonGrid, PokemonResponse, SimplePokemon } from '@/app/pokemons'


const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    (res) => res.json()
  )
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!, //oerador para indicar que la operacion no sera null o undefined
    name: pokemon.name
  }))
  return pokemons
}

export default async function PokemonsPage() {
  const pokemonsList = await getPokemons(151)
  return (
    <>
      <div className='flex flex-col'>
        <h1 className='text-4xl font-bold text-center'>Static Pokedex</h1>
       <PokemonGrid pokemons={pokemonsList} />
      </div>
    </>
  )
}

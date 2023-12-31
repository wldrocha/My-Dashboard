import { Pokemon } from '@/pokemons'
import { Metadata } from 'next'

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pokemon = await getPokemon(params.id)
  
  return {
    title: `#${pokemon.id} ${pokemon.name}`,
    description: `Information about ${pokemon.name}`
  }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    // cache: 'force-cache'
    next:{
      revalidate: 60 * 60 * 24 * 30
    }
  }).then((res) => res.json())
  return data
}

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id)
  return (
    <div>
      <h1>Hello Pokemon page</h1>
      {/* {JSON.stringify(pokemon)} */}
    </div>
  )
}

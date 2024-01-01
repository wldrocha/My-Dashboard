import { Pokemon, PokemonDetailsCard } from '@/pokemons'

import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    name: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const pokemon = await getPokemon(params.name)

    return {
      title: `#${pokemon.id} ${pokemon.name}`,
      description: `Information about ${pokemon.name}`
    }
  } catch (error) {
    return {
      title: `Pokemon page`,
      description: `Pokemon not found`
    }
  }
}

const getPokemon = async (pokemonName: string): Promise<Pokemon> => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
      // cache: 'force-cache'
      next: {
        revalidate: 60 * 60 * 24 * 30
      }
    }).then((res) => res.json())
    return data
  } catch (error) {
    notFound()
  }
}

export default async function PokemonDetailsPage({ params }: Props) {
  const pokemon = await getPokemon(params.name)
  return <PokemonDetailsCard{...pokemon} />
}

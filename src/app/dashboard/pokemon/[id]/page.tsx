import { Pokemon, PokemonDetailsCard } from '@/pokemons'


import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const pokemon = await getPokemon(params.id)

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

const getPokemon = async (id: string): Promise<Pokemon> => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
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

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id)

  return <PokemonDetailsCard {...pokemon} />
}

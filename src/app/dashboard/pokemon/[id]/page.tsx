import { Pokemon } from '@/pokemons'

interface Props {
  params: {
    id: string
  }
}


export const metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};

const getPokemon = async (id: string): Promise<Pokemon> => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache'
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

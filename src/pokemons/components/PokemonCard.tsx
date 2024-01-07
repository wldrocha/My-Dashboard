'use client'
import Link from 'next/link'
import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '@/app/store'
import { toggleFavorite } from '@/app/store/pokemons/pokemons'
import { SimplePokemon } from '..'
import Image from 'next/image'

export const PokemonCard = (pokemon: SimplePokemon) => {
  const { id, name } = pokemon
  const isFavorite = useAppSelector((state) => state.pokemons.favorites[`${id}`])

  const dispatch = useAppDispatch()
  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(pokemon))
  }
  return (
    <div className='mx-auto right-0 mt-2 w-60'>
      <div className='flex flex-col bg-white rounded overflow-hidden shadow-lg'>
        <div className='flex flex-col items-center justify-center p-6 bg-gray-800 border-b'>
          <Image
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={name}
            priority={false}
          />
          <p className='pt-2 text-lg font-semibold text-gray-50'>{name}</p>
          <p className='text-sm text-gray-100'>John@Doe.com</p>
          <Link
            href={`/dashboard/pokemon/${id}`}
            className='mt-5 border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 capitalize'
          >
            More info
          </Link>
        </div>
        <div className='border-b'>
          <div className='flex items-center px-4 py-2 hover:bg-gray-100 flex' onClick={handleToggleFavorite}>
            <div className='text-red-600'>{isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}</div>
            <div className='pl-3'>
              <p className='text-sm font-medium text-gray-800 leading-none'>No es favorito</p>
              {/* <p className='text-xs text-gray-500'>View your campaigns</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

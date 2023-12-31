import Link from 'next/link'
import React from 'react'
import { SimplePokemon } from '..'
import Image from 'next/image'
import { MdFavoriteBorder } from 'react-icons/md'

export const PokemonCard = ({ id, name }: SimplePokemon) => {
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
          />
          <p className='pt-2 text-lg font-semibold text-gray-50'>{name}</p>
          <p className='text-sm text-gray-100'>John@Doe.com</p>
          <div className='mt-5'>
            <a className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 capitalize'>More info</a>
          </div>
        </div>
        <div className='border-b'>
          <Link href='/dashboard/main' className='flex items-center px-4 py-2 hover:bg-gray-100 flex'>
            <div className='text-red-600'>
              <MdFavoriteBorder />
            </div>
            <div className='pl-3'>
              <p className='text-sm font-medium text-gray-800 leading-none'>No es favorito</p>
              <p className='text-xs text-gray-500'>View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

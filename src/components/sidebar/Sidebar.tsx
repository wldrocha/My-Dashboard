import React from 'react'
import Image from 'next/image'

import { MdOutlineDashboard, MdOutlineCalculate, MdCatchingPokemon, MdFavorite } from 'react-icons/md'
import { SidebarMenuItem } from './'
import path from 'path'

const menuitems = [
  {
    path: '/dashboard/main',
    icon: <MdOutlineDashboard size={20} />,
    title: 'Dashboard',
    subTitle: 'Data Overview'
  },
  {
    path: '/dashboard/counter',
    icon: <MdOutlineCalculate size={20} />,
    title: 'Counter',
    subTitle: 'Counter client side'
  },
  {
    path: '/dashboard/pokemons',
    icon: <MdCatchingPokemon size={20} />,
    title: 'Pokedex',
    subTitle: 'Static Generation'
  },
  {
    path: '/dashboard/favorites',
    icon: <MdFavorite size={20} />,
    title: 'Favorites',
    subTitle: 'Global State'
  }
]

export const Sidebar = () => {
  return (
    <div
      style={{ width: '400px' }}
      id='menu'
      className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll'
    >
      <div id='logo' className='my-4 px-6'>
        <h2 className='text-lg md:text-2xl font-bold text-white'>
          Dash<span className='text-blue-500'>8</span>.
        </h2>
        <p className='text-slate-500 text-sm'>Manage your actions and activities</p>
      </div>
      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500'>Welcome back,</p>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <Image
              className='rounded-full w-8 h-8'
              src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c'
              alt='user avatar'
              width={50}
              height={50}
            />
          </span>
          <span className='text-sm md:text-base font-bold'>Jhon Doe</span>
        </a>
      </div>
      <div id='nav' className='w-full px-6'>
        {menuitems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  )
}

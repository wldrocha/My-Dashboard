'use client'
import { useState } from 'react'

export const CartCounter = () => {
  const [counter, setCounter] = useState(10)
  return (
    <>
      <span className='text-9xl'>{counter}</span>
      <div className='flex'>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all ase-in duration-300 w-[100px] mr-2'
          onClick={() => setCounter((oldState) => oldState + 1)}
        >
          +1
        </button>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all ase-in duration-300 w-[100px] mr-2'
          onClick={() => setCounter((oldState) => oldState - 1)}
        >
          -1
        </button>
      </div>
    </>
  )
}

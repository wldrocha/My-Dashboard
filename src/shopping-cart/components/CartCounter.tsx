'use client'
import { useAppDispatch, useAppSelector } from '@/app/store'
import { addOne, initCounter, subtractOne } from '@/app/store/slices/counterSlice'
import { useEffect } from 'react'

export interface CounterResponse {
  method: string
  count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then((res) => res.json())
  return data
}

export const CartCounter = () => {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getApiCounter().then(({ count }) => {
      dispatch(initCounter(count))
    })
  }, [])
  return (
    <>
      <span className='text-9xl'>{count}</span>
      <div className='flex'>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all ase-in duration-300 w-[100px] mr-2'
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all ase-in duration-300 w-[100px] mr-2'
          onClick={() => dispatch(subtractOne())}
        >
          -1
        </button>
      </div>
    </>
  )
}

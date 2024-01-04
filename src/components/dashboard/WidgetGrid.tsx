'use client'
import { useAppSelector } from '@/app/store'
import { SimpleWidget } from '..'
import { MdOutlineShoppingCart } from 'react-icons/md'

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counter.count)
  return (
    <div className='flex flex-wrap p-2 flex-col justify-center items-center'>
      <SimpleWidget
        title={`${count}`}
        label='Contador'
        subtitle='Productos en carrito'
        icon={<MdOutlineShoppingCart size={50} className='text-blue-600' />}
        href="/dashboard/counter"
      />
      {/* <SimpleWidget /> */}
    </div>
  )
}

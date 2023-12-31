import { CartCounter } from '@/app/shopping-cart'



export const metadata = {
  title:'Shopping Cart',
  description: 'A page with a counter',
}

export default function CounterPage() {
  
 

  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <span>Productos del carrito</span>
      <CartCounter />
    </div>
  )
}

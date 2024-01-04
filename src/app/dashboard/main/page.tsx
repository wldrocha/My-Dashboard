import { SimpleWidget } from '@/components'

export default function MainPage() {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>Información general</span>
      <div className='flex flex-wrap p-2 flex-col justify-center items-center'>
        <SimpleWidget />
      </div>
    </div>
  )
}

import { SimpleWidget } from '@/components'
import { WidgetGrid } from '@/components/dashboard/WidgetGrid'

export const metadata = {
  title: 'Dashboard',
  description: 'Admin dashboard'
}

export default function MainPage() {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>Información general</span>
      <WidgetGrid />
    </div>
  )
}

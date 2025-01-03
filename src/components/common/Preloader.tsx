import { MutatingDots } from 'react-loader-spinner'

export default function Preloader() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <MutatingDots wrapperClass='preloader' />
    </div>
  )
}

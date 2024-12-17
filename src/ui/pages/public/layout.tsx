import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='bg-gray-100 flex justify-center items-center h-screen'>
      <div className='w-1/2 h-screen hidden lg:block'>
        <img
          alt='hermes'
          className='object-cover object-top h-full w-[100%]'
          src='/src/assets/hermes.jpeg'
        />
      </div>

      <div className='lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout

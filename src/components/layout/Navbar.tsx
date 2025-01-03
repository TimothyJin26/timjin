import { NavLink } from 'react-router-dom'


export default function Navbar() {

  return (
    <nav className='fixed top-0 z-50 w-full backdrop-blur-xl'>
      <div className='container flex flex-wrap items-center justify-between py-4 xl:max-w-screen-xl'>
        <div>PLACE LOGO HERE</div>
        <div className='flex items-center space-x-2 sm:space-x-6'>
            <li className='flex'>
                <NavLink
                    key={0}
                    to='/'
                >
                    <button>Home</button>
                </NavLink>
                <NavLink
                    key={1}
                    to='/default'
                >
                    <button>Default</button>
                </NavLink>
            </li>
        </div>
      </div>
    </nav>
  )
}

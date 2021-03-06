import Link from 'next/link'
import RedditLogo from '../images/reddit.svg'

const Navbar: React.FC = () => {
  return (
    <div className='fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 bg-white '>
      {/* Logo and title */}
      <div className='flex w-2/12 mx-4 items center'>
        <Link href='/'>
          <a>
            <RedditLogo className='w-8 h-8 mr-2' />
          </a>
        </Link>
        <span className='text-2xl font-semibold'>
          <Link href='/'>readit</Link>
        </span>
      </div>
      {/* Search Input */}
      <div className='flex items-center w-8/12 max-w-2xl mx-auto bg-gray-100 border rounded hover:border-blue-500 hover:bg-white'>
        <i className='pl-4 pr-3 text-gray-500 fas fa-search'></i>
        <input
          type='text'
          className='py-1 pr-3 bg-transparent rounded w-160 focus:outline-none'
          placeholder='Search'
        />
      </div>
      {/* Auth Buttons */}

      <div className='flex w-2/12 mx-4'>
        <Link href='/login'>
          <a className='w-32 py-1 mr-4 leading-5 hollow blue button '>log in</a>
        </Link>
        <Link href='/register'>
          <a className='w-32 py-1 leading-5 blue button'>Sign up</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar

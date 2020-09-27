import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const NavBar: React.FC = () => {
	const router = useRouter()
	const [toggle, setToggle] = useState('hidden')
	const changeBgNav = router.pathname === '/' ? '' : 'bg-black'
	return (
		<nav
			className={
				'flex items-center justify-between flex-wrap p-6 fixed w-screen ' +
				changeBgNav
			}>
			<div className='flex items-center flex-no-shrink text-white mr-6'>
				<i className='fas fa-code text-gray icon mr-2' />
				<span className='font-semibold text-xl tracking-tight'>
					Stefan Kalan
				</span>
			</div>
			<div className='block lg:hidden'>
				<button
					className='flex items-center px-3 py-2 border rounded border-black text-black hover:text-white hover:border-white'
					onClick={() => setToggle(toggle === '' ? 'hidden' : '')}>
					<svg
						className='h-3 w-3'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</button>
			</div>
			<div
				className={
					'w-full block flex-grow lg:flex lg:items-center lg:w-auto ' +
					toggle
				}>
				<div className='text-sm lg:flex-grow m-auto'></div>
				<div>
					<div className='text-sm lg:flex-grow'>
						<Link href='/'>
							<a className='block mt-4 lg:inline-block lg:mt-0 text-white  hover:text-white mr-8 text-lg'>
								Home
							</a>
						</Link>
						<Link href='/blog'>
							<a className='block mt-4 lg:inline-block lg:mt-0 text-white  hover:text-white mr-8 text-lg'>
								Blog
							</a>
						</Link>
						<Link href='/about'>
							<a className='block mt-4 lg:inline-block lg:mt-0 text-white  hover:text-white mr-8 text-lg'>
								About
							</a>
						</Link>
						<Link href='/projects'>
							<a className='block mt-4 lg:inline-block lg:mt-0 text-white  hover:text-white mr-8 text-lg'>
								Projects
							</a>
						</Link>
						<Link href='/contact'>
							<a className='block mt-4 lg:inline-block lg:mt-0 text-white  hover:text-white mr-8 text-lg'>
								Contact
							</a>
						</Link>
						<Link href='/_CV.pdf'>
							<a className='block mt-4 lg:inline-block lg:mt-0 text-white  hover:text-white mr-8 text-lg'>
								Resume
							</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBar

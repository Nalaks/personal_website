import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'

const NavBar: React.FC = () => {
	const router = useRouter()
	const [toggle, setToggle] = useState('hidden')
	const changeBgNav =
		router.pathname === '/' ? 'w-screen fixed' : 'bg-black sticky'

	const NavWrapper = styled.nav.attrs({
		className:
			'flex items-center justify-between flex-wrap p-6 ' + changeBgNav
	})``

	const NavLinks = styled.a.attrs({
		className:
			'block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8 text-lg'
	})``

	const LinkWrapper = styled.div.attrs({
		className: 'text-sm lg:flex-grow'
	})``

	const Divider = styled.div.attrs({
		className: 'text-sm lg:flex-grow m-auto'
	})``

	const HeadingWrapper = styled.div.attrs({
		className: 'flex items-center flex-no-shrink text-white mr-6'
	})``

	const Icon = styled.i.attrs({
		className: 'fas fa-code text-gray icon mr-2'
	})``

	const Heading = styled.span.attrs({
		className: 'font-semibold text-xl tracking-tight'
	})``

	const ToggleWrapper = styled.div.attrs({
		className:
			'w-full block flex-grow lg:flex lg:items-center lg:w-auto ' +
			toggle
	})``

	const MobileMenuWrapper = styled.div.attrs({
		className: 'block lg:hidden'
	})``

	const ButtonToggle = styled.button.attrs({
		className:
			'flex items-center px-3 py-2 border rounded border-black text-black hover:text-white hover:border-white'
	})``

	return (
		<NavWrapper>
			<HeadingWrapper>
				<Icon />
				<Heading>Stefan Kalan</Heading>
			</HeadingWrapper>
			<MobileMenuWrapper>
				<ButtonToggle
					onClick={() => setToggle(toggle === '' ? 'hidden' : '')}>
					<svg
						className='h-3 w-3'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</ButtonToggle>
			</MobileMenuWrapper>
			<ToggleWrapper>
				<Divider></Divider>
				<div>
					<LinkWrapper>
						<Link href='/'>
							<NavLinks>Home</NavLinks>
						</Link>
						<Link href='/blog'>
							<NavLinks>Blog</NavLinks>
						</Link>
						<Link href='/about'>
							<NavLinks>About</NavLinks>
						</Link>
						<Link href='/projects'>
							<NavLinks>Projects</NavLinks>
						</Link>
						<Link href='/contact'>
							<NavLinks>Contact</NavLinks>
						</Link>
						<Link href='/_CV.pdf'>
							<NavLinks>Resume</NavLinks>
						</Link>
					</LinkWrapper>
				</div>
			</ToggleWrapper>
		</NavWrapper>
	)
}

export default NavBar

import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Icon = styled.i`
	font-size: 1.6rem;
`
const HeadingNav = styled.span`
	font-size: 1.6rem;
`
const LinkText = styled.span`
	font-size: 1.4rem;
	color: #fff;
	:hover {
		color: #ff9a17;
		cursor: pointer;
	}
`

export default function NavBar() {
	const router = useRouter()
	return (
		<>
			<Navbar
				expand='lg'
				fixed='top'
				className={router.pathname === '/' ? '' : 'bg-dark'}>
				<Navbar.Brand>
					<Icon className='fas fa-code ml-4 mr-3 text-white icon' />
					<Link href='/'>
						<HeadingNav className='text-white'>
							Stefan Kalan
						</HeadingNav>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='basic-navbar-nav'
					className='bg-white'
				/>
				<Navbar.Collapse id='basic-navbar-nav' className='ml-4'>
					<Nav className='mr-auto'></Nav>
					<Nav>
						<Nav.Link as={Link} href='/'>
							<LinkText className='mr-4'>Home</LinkText>
						</Nav.Link>
						<Nav.Link as={Link} href='/blog'>
							<LinkText className='mr-4'>Blog</LinkText>
						</Nav.Link>
						<Nav.Link as={Link} href='/about'>
							<LinkText className='mr-4'>About</LinkText>
						</Nav.Link>
						<Nav.Link as={Link} href='/projects'>
							<LinkText className='mr-4'>Projects</LinkText>
						</Nav.Link>
						<Nav.Link as={Link} href='/contact'>
							<LinkText className='mr-4'>Contact</LinkText>
						</Nav.Link>
						<Nav.Link as={Link} href='/_CV.pdf'>
							<LinkText className='mr-4'>Resume</LinkText>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

import Head from 'next/head'
import Link from 'next/link'
import LayoutHome from '../layout/layoutHome'
import { Container } from 'react-bootstrap'
import Typing from '../lib/typing'
import styled from 'styled-components'

const siteTitle = 'Home'

const HomeContainer = styled.div`
	background-image: url('/images/main.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`

const Home = () => {
	return (
		<LayoutHome>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<HomeContainer>
				<div className='d-flex justify-content-center align-items-center flex-column vh-100'>
					<p>
						<Typing />
					</p>
					<div className='d-flex'>
						<a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fas fa-terminal fa-3x text-dark mr-4'></i>
						</a>
						<a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fab fa-linkedin fa-3x text-white mr-4'></i>
						</a>
						<a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fab fa-twitter-square fa-3x text-primary mr-4'></i>
						</a>
						<a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fab fa-github-square fa-3x text-danger'></i>
						</a>
					</div>
				</div>
			</HomeContainer>
		</LayoutHome>
	)
}

export default Home

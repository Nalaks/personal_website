import Head from 'next/head'
import Link from 'next/link'
import LayoutHome from '../layout/layoutHome'
import Typing from '../lib/typing'

const siteTitle = 'Home'

const Home = () => {
	return (
		<LayoutHome>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<div className='bg-coding bg-center bg-no-repeat bg-cover h-screen'>
				<div className='flex flex-col justify-center items-center h-full'>
					<p>
						<Typing />
					</p>
					<div className=''>
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
							<i className='fab fa-linkedin fa-3x text-blue-700 mr-4'></i>
						</a>
						<a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fab fa-twitter-square fa-3x text-blue-500 mr-4'></i>
						</a>
						<a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fab fa-github-square fa-3x'></i>
						</a>
					</div>
				</div>
			</div>
		</LayoutHome>
	)
}

export default Home

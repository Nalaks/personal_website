import Head from 'next/head'
import LayoutHome from '../../layout/layoutHome'

const siteTitle = 'About'

const About = () => {
	return (
		<LayoutHome>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<div className='d-flex justify-content-center align-items-center'>
				<h1 className='test'>About</h1>
			</div>
			<style jsx>{`
				.test {
					margin-top: 5rem;
					text-align: center;
				}
			`}</style>
		</LayoutHome>
	)
}

export default About

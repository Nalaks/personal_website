import Head from 'next/head'
import LayoutHome from '../../layout/layoutHome'

const siteTitle = 'Projects'

const Projects = () => {
	return (
		<LayoutHome>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<div className='d-flex justify-content-center align-items-center'>
				<h1 className='test'>Projects</h1>
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

export default Projects

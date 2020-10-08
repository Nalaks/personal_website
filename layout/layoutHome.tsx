import Head from 'next/head'
import React from 'react'
import Footer from './footer/footer'
import NavBar from './nav/nav'

const siteTitle = 'Personal Website'

const LayoutHome: React.FC = ({ children }: LayoutProps) => {
	return (
		<>
			<Head>
				<meta
					name='description'
					content='Personal Website of Stefan Kalan'
				/>
				<meta name='og:title' content={siteTitle} />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1'
				/>
			</Head>
			<NavBar />
			{children}
			<Footer />
		</>
	)
}

export default LayoutHome

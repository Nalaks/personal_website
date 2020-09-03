import Head from 'next/head'
import NavBar from './nav/nav'

const siteTitle = 'Personal Website'

export default function LayoutHome({
	children,
	home,
	about,
	contact,
	projects
}: LayoutProps) {
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
			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
						Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
						Helvetica Neue, sans-serif;
					font-size: 16px;
					height: 100%;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</>
	)
}

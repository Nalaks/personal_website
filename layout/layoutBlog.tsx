import Head from 'next/head'
import Link from 'next/link'
import NavBar from './nav/nav'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const name = 'Stefan Kalan'
export const siteTitle = 'Personal Blog'

const BackButton = styled(Button)`
	:hover {
		background-color: #ff9a17 !important;
	}
`

const LayoutContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 7rem;
`

const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const HeaderOne = styled.h1`
	font-size: 3.5rem;
	line-height: 1.2;
	font-weight: 600;
	letter-spacing: -0.05rem;
	margin: 1rem 0;
`

const HeaderTwo = styled.h2`
	font-size: 2.8rem;
	line-height: 1.4;
	margin: 1rem 0;
`

const HeaderImage = styled.img`
	border-radius: 50%;
	width: 12rem;
	height: 12rem;
`

const BlogImage = styled.img`
	border-radius: 50%;
	width: 10rem;
	height: 10rem;
`

const ButtonContainer = styled.div`
	margin: 2rem 0;
	align-self: flex-start;
`

export default function LayoutBlog({
	children,
	blog
}: LayoutBlogProps) {
	return (
		<>
			<LayoutContainer className='container'>
				<Head>
					<meta
						name='description'
						content='Personal Blog of Stefan Kalan'
					/>
					<meta name='og:title' content={siteTitle} />
					<meta name='twitter:card' content='summary_large_image' />
				</Head>
				<NavBar />
				<Header>
					{blog ? (
						<>
							<HeaderImage src='/images/profile.jpg' alt={name} />
							<HeaderOne>{name}</HeaderOne>
						</>
					) : (
						<>
							<Link href='/blog'>
								<a>
									<BlogImage src='/images/profile.jpg' alt={name} />
								</a>
							</Link>
							<HeaderTwo>
								<Link href='/blog'>
									<a>{name}</a>
								</Link>
							</HeaderTwo>
						</>
					)}
				</Header>
				<main>{children}</main>
				{!blog && (
					<ButtonContainer>
						<Link href='/blog'>
							<BackButton variant='outline-dark'>
								← Back to home
							</BackButton>
						</Link>
					</ButtonContainer>
				)}
				<style jsx global>{`
					html,
					body {
						padding: 0;
						margin: 0;
						font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
							Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
							Helvetica Neue, sans-serif;
						font-size: 16px;
					}

					* {
						box-sizing: border-box;
					}

					img {
						max-width: 100%;
						display: block;
					}
				`}</style>
			</LayoutContainer>
		</>
	)
}

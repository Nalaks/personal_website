import Head from 'next/head'
import Link from 'next/link'
import Date from '../../lib/date'
import LayoutBlog, { siteTitle } from '../../layout/layoutBlog'
import { getSortedPostsData } from '../../lib/posts'
import { GetStaticProps } from 'next'
import styled from 'styled-components'

const SectionOne = styled.section`
	font-size: 2rem;
	line-height: 1.2;
	text-align: center;
`

const SectionTwo = styled.section`
	font-size: 1.4rem;
	line-height: 1.2;
	margin-top: 2rem;
`

const HeadingTwo = styled.h2`
	font-size: 2rem;
	line-height: 1.4;
	margin: 1rem 0;
`

const DateSmall = styled.small`
	color: #999;
	margin-top: 0.5rem;
`

const BlogList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`

const ListItem = styled.li`
	margin-bottom: 1.5rem;
`

const BlogTitle = styled.a`
	/* color: #000; */
	:hover {
		color: #ff9a17;
	}
`

const Blog = ({ allPostsData }: allPostsDataProps) => {
	return (
		<LayoutBlog blog>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<SectionOne>
				<p>Hi, I'm Stefan. A Web Developer by heart and mind.</p>
			</SectionOne>

			<SectionTwo>
				<HeadingTwo>Blog</HeadingTwo>
				<BlogList>
					{allPostsData.map(({ id, date, title }) => (
						<ListItem key={id}>
							<Link href='/posts/[id]' as={`/posts/${id}`}>
								<BlogTitle>{title}</BlogTitle>
							</Link>
							<br />
							<DateSmall>
								<Date dateString={date} />
							</DateSmall>
						</ListItem>
					))}
				</BlogList>
			</SectionTwo>
		</LayoutBlog>
	)
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}

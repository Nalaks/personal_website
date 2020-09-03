import Layout from '../../layout/layoutBlog'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../lib/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import styled from 'styled-components'

const DateContainer = styled.div`
	font-size: 1.8rem;
	color: #999;
	border-bottom: 2px solid black;
	margin-bottom: 1rem;
`

const BlogContent = styled.div`
	font-size: 1.5rem;
`

const BlogHeading = styled.h1`
	font-size: 2.5rem;
	line-height: 1.2;
	font-weight: 600;
	letter-spacing: -0.05rem;
	margin: 1rem 0;
`

const Post = ({ postData }: postDataProps) => {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<BlogHeading>{postData.title}</BlogHeading>
				<DateContainer className='lightText'>
					<Date dateString={postData.date} />
				</DateContainer>
				<BlogContent
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
				/>
			</article>
		</Layout>
	)
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id as string)
	return {
		props: {
			postData
		}
	}
}

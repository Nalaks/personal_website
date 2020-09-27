import Layout from '../../layout/layoutBlog'
import React from 'react'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../lib/date'
import { GetStaticProps, GetStaticPaths } from 'next'

const Post = ({ postData }: postDataProps) => {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article className='flex items-center justify-center'>
				<div className='flex flex-col items-center justify-center pt-8 w-4/5 md:w-2/4'>
					<h1 className='text-3xl text-center'>{postData.title}</h1>
					<div className='border-t-2 border-solid text-gray-400 w-full mt-8 mb-8'>
						<Date dateString={postData.date} />
					</div>
					<div
						className='text-lg leading-7 blog-content'
						dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
					/>
				</div>
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

import Head from 'next/head'
import Link from 'next/link'
import Date from '../../lib/date'
import LayoutBlog, { siteTitle } from '../../layout/layoutBlog'
import { getSortedPostsData } from '../../lib/posts'
import { GetStaticProps } from 'next'

const Blog = ({ allPostsData }: allPostsDataProps) => {
	return (
		<LayoutBlog blog>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className='text-gray-700 body-font overflow-hidden'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='-my-8'>
						{allPostsData.map(({ id, date, title }) => (
							<div
								className='py-8 border-t-2 border-gray-200 flex flex-wrap md:flex-no-wrap'
								key={id}>
								<div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
									<span className='tracking-widest font-medium title-font text-gray-900'>
										CATEGORY
									</span>
									<span className='mt-1 text-gray-500 text-sm'>
										<Date dateString={date} />
									</span>
								</div>
								<div className='md:flex-grow'>
									<h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
										{title}
									</h2>
									<p className='leading-relaxed'>
										Glossier echo park pug, church-key sartorial
										biodiesel vexillologist pop-up snackwave ramps
										cornhole. Marfa 3 wolf moon party messenger bag
										selfies, poke vaporware kombucha lumbersexual pork
										belly polaroid hoodie portland craft beer.
									</p>
									<Link href='/posts/[id]' as={`/posts/${id}`}>
										<a className='text-indigo-500 inline-flex items-center mt-4'>
											Learn More
											<svg
												className='w-4 h-4 ml-2'
												viewBox='0 0 24 24'
												stroke='currentColor'
												strokeWidth='2'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'>
												<path d='M5 12h14'></path>
												<path d='M12 5l7 7-7 7'></path>
											</svg>
										</a>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
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

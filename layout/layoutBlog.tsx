import Head from 'next/head'
import Link from 'next/link'
import NavBar from './nav/nav'
import React from 'react'

const name = 'Stefan Kalan'
export const siteTitle = 'Personal Blog'

const LayoutBlog: React.FC = ({
	children,
	blog
}: LayoutBlogProps) => {
	return (
		<>
			<Head>
				<meta
					name='description'
					content='Personal Blog of Stefan Kalan'
				/>
				<meta name='og:title' content={siteTitle} />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<NavBar />
			<div>
				{blog ? (
					<>
						<section className='text-gray-700 body-font'>
							<div className='container mx-auto flex px-5 pt-32 items-center justify-center flex-col'>
								<img
									className='h-40 w-40 mb-4 object-cover object-center rounded-full'
									alt='stefan kalan'
									src={'/images/profile.jpg'}
								/>
								<div className='text-center lg:w-2/3 w-full'>
									<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
										{name}
									</h1>
									<p className='mb-8 leading-relaxed'>
										Meggings kinfolk echo park stumptown DIY, kale
										chips beard jianbing tousled.
									</p>
									<div className='flex justify-center'>
										<button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
											Button
										</button>
										<button className='ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg'>
											Button
										</button>
									</div>
								</div>
							</div>
						</section>
					</>
				) : (
					<>
						<section className='text-gray-700 body-font'>
							<div className='container mx-auto flex px-5 pt-32 items-center justify-center flex-col'>
								<img
									className='h-32 w-32 mb-4 object-cover object-center rounded-full'
									alt='stefan kalan'
									src={'/images/profile.jpg'}
								/>
								<div className='text-center lg:w-2/3 w-full'>
									<Link href='/blog'>
										<a className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 underline'>
											{name}
										</a>
									</Link>
								</div>
							</div>
						</section>
					</>
				)}
			</div>
			<main>{children}</main>
			{!blog && (
				<div className='flex items-center justify-center mb-4'>
					<Link href='/blog'>
						<a className='text-indigo-500 inline-flex items-center mt-4'>
							<svg
								className='w-4 h-4 mr-2'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='blue'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M10 19l-7-7m0 0l7-7m-7 7h18'
								/>
							</svg>
							Back
						</a>
					</Link>
				</div>
			)}
		</>
	)
}

export default LayoutBlog

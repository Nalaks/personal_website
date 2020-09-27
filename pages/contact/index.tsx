import Head from 'next/head'
import LayoutHome from '../../layout/layoutHome'
import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const siteTitle = 'Contact'
const emailService = ''
const emailTemplate = ''
const userID = ''

const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [text, setText] = useState('')
	const [success, setSuccess] = useState<boolean | undefined>()

	const resetForm = () => {
		setName('')
		setEmail('')
		setSubject('')
		setText('')
	}

	const submitForm = async (e) => {
		e.preventDefault()

		const templateParams = {
			from_name: name,
			from_email: email,
			to_name: 'Stefan',
			subject: subject,
			message_html: text
		}
		try {
			const res = await emailjs.send(
				emailService,
				emailTemplate,
				templateParams,
				userID
			)
			res ? setSuccess(true) : null
		} catch (err) {
			setSuccess(false)
		}

		setTimeout(() => {
			setSuccess(undefined)
		}, 6000)
		resetForm()
	}

	return (
		<LayoutHome>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className='text-gray-700 body-font relative'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-col text-center w-full mb-12'>
						<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
							Contact Me
						</h1>
						<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
							Please leave a message for any reason.
						</p>
					</div>
					<div className='lg:w-1/2 md:w-2/3 mx-auto'>
						<form
							className='flex flex-wrap -m-2'
							onSubmit={submitForm}>
							<div className='p-2 w-1/2'>
								<input
									className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
									placeholder='Name'
									type='text'
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className='p-2 w-1/2'>
								<input
									className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
									placeholder='Email'
									type='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className='p-2 w-full'>
								<input
									className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
									placeholder='Subject'
									type='text'
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
								/>
							</div>
							<div className='p-2 w-full'>
								<textarea
									className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block'
									placeholder='Message'
									value={text}
									onChange={(e) =>
										setText(e.target.value)
									}></textarea>
							</div>
							{success === false && (
								<div
									className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 m-4 w-full rounded'
									role='alert'>
									<p className='font-bold'>Error</p>
									<p>Something went wrong, please try again.</p>
								</div>
							)}
							{success === true && (
								<div
									className='bg-green-100 border-l-4 border-green-500 text-green-700 p-4 m-4 w-full rounded'
									role='alert'>
									<p className='font-bold'>Success</p>
									<p>Message sent successfully.</p>
								</div>
							)}
							<div className='p-2 w-full'>
								<button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
									Submit
								</button>
							</div>
							<div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
								<a className='text-indigo-500'>
									insertinsight@email.com
								</a>
								<p className='leading-normal my-5'>
									Lazarettgürtel 56
									<br />
									Graz, Steiermark 8020
								</p>
								<span className='inline-flex'>
									<a className='text-gray-500'>
										<svg
											fill='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'>
											<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
										</svg>
									</a>
									<a className='ml-4 text-gray-500'>
										<svg
											fill='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'>
											<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
										</svg>
									</a>
									<a className='ml-4 text-gray-500'>
										<svg
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'>
											<rect
												width='20'
												height='20'
												x='2'
												y='2'
												rx='5'
												ry='5'></rect>
											<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
										</svg>
									</a>
									<a className='ml-4 text-gray-500'>
										<svg
											fill='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'>
											<path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
										</svg>
									</a>
								</span>
							</div>
						</form>
					</div>
				</div>
			</section>
		</LayoutHome>
	)
}

export default Contact

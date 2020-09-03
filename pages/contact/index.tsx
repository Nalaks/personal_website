import Head from 'next/head'
import LayoutHome from '../../layout/layoutHome'
import React, { useState } from 'react'
import {
	Form,
	Button,
	Alert,
	Row,
	Col,
	Container
} from 'react-bootstrap'
import emailjs from 'emailjs-com'
import styled from 'styled-components'

const siteTitle = 'Contact'
let emailService = 'test_mail'
let emailTemplate = 'template_0COFXNid'
let userID = 'user_WMibmk2Y5IM7CfvaHZkIP'

const ColMiddle = styled(Col)`
	background-color: #ff9a17 !important;
`
const HeadingSpan = styled.span`
	color: #ff9a17 !important;
`

const FormContainer = styled(Container)`
	@media only screen and (max-width: 600px) {
		width: 75vw !important;
	}
`

const HeadingOne = styled.h1`
	@media only screen and (max-width: 600px) {
		font-size: 3.2rem !important;
	}
`

const ContactContainer = styled.div`
	margin-top: 5rem !important;
`

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

		let templateParams = {
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

			<ContactContainer className='d-flex justify-content-center align-items-center flex-column'>
				<div>
					<HeadingOne className='display-3'>
						Contact <HeadingSpan>Me</HeadingSpan>
					</HeadingOne>
				</div>
				<FormContainer className='mt-2 w-50 mb-4'>
					<Form onSubmit={submitForm}>
						<Form.Group controlId='formGridName'>
							<Form.Label className='label'>Name:</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter name...'
								name='user_name'
								value={name}
								onChange={(e) => setName(e.target.value)}
								className='form-input'
								required
							/>
						</Form.Group>

						<Form.Group controlId='formGridEmail'>
							<Form.Label className='label'>Email:</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email...'
								name='user_email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className='form-input'
								required
							/>
						</Form.Group>

						<Form.Group controlId='formGridSubject'>
							<Form.Label className='label'>Subject:</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter subject...'
								name='subject'
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								className='form-input'
								required
							/>
						</Form.Group>

						<Form.Group controlId='formTextArea'>
							<Form.Label className='label'>Message:</Form.Label>
							<Form.Control
								as='textarea'
								placeholder='Enter message...'
								name='message'
								rows={5}
								value={text}
								onChange={(e) => setText(e.target.value)}
								className='form-input'
								required
							/>
						</Form.Group>
						{success === true && (
							<Alert variant='primary' className='alert'>
								Message send successfully!
							</Alert>
						)}
						{success === false && (
							<Alert variant='danger' className='alert'>
								Something went wrong, please try again.
							</Alert>
						)}

						<Button
							variant='dark'
							type='submit'
							size='lg'
							block
							className='btn-form'>
							Send Message
						</Button>
					</Form>
				</FormContainer>
				<Container fluid className='mt-4'>
					<Row className='info-cols'>
						<Col className='col-black bg-dark' sm>
							<div className='d-flex justify-content-center align-items-center flex-column text-white mt-4'>
								<i className='far fa-envelope fa-5x'></i>
								<p className='mt-2'>Email:</p>
								<p className='mb-4'>test@gmail.com</p>
							</div>
						</Col>
						<ColMiddle className='col-middle' sm>
							<div className='d-flex justify-content-center align-items-center flex-column text-white mt-4'>
								<i className='fas fa-mobile-alt fa-5x'></i>
								<p className='mt-2'>Phone:</p>
								<p className='mb-4'>+43 123456789</p>
							</div>
						</ColMiddle>
						<Col className='col-black bg-dark ' sm>
							<div className='d-flex justify-content-center align-items-center flex-column text-white mt-4'>
								<i className='far fa-address-card fa-5x'></i>
								<p className='mt-2'>Address:</p>
								<p className='mb-4'>test, test</p>
							</div>
						</Col>
					</Row>
				</Container>
			</ContactContainer>
		</LayoutHome>
	)
}

export default Contact

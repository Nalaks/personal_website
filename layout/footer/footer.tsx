import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const Footer: React.FC = () => {
	const router = useRouter()
	const hideFooter = router.pathname === '/' ? 'hidden' : ''

	const Footer = styled.footer.attrs({
		className: 'bg-gray-200 ' + hideFooter
	})``

	const FooterWrapper = styled.div.attrs({
		className:
			'container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'
	})``

	const TextWrapper = styled.p.attrs({
		className: 'text-gray-500 text-sm text-center sm:text-left'
	})``

	const TwitterLink = styled.a.attrs({
		className: 'text-gray-600 ml-1'
	})``

	const SocialMediaWrapper = styled.span.attrs({
		className:
			'inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'
	})``

	const IconWrapper = styled.svg.attrs({
		className: 'w-5 h-5'
	})``

	const SocialMediaLinks = styled.a.attrs({
		className: 'ml-3 text-gray-500'
	})``

	return (
		<Footer>
			<FooterWrapper>
				<TextWrapper>
					© 2020 Stefan Kalan —
					<TwitterLink
						href='https://twitter.com/knyttneve'
						rel='noopener noreferrer'
						target='_blank'>
						@nalaks
					</TwitterLink>
				</TextWrapper>
				<SocialMediaWrapper>
					<SocialMediaLinks href='www.example.com'>
						<IconWrapper
							fill='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							viewBox='0 0 24 24'>
							<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
						</IconWrapper>
					</SocialMediaLinks>
					<SocialMediaLinks href='www.example.com'>
						<IconWrapper
							fill='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							viewBox='0 0 24 24'>
							<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
						</IconWrapper>
					</SocialMediaLinks>
					<SocialMediaLinks href='www.example.com'>
						<IconWrapper
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							viewBox='0 0 24 24'>
							<rect
								width='20'
								height='20'
								x='2'
								y='2'
								rx='5'
								ry='5'></rect>
							<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
						</IconWrapper>
					</SocialMediaLinks>
					<SocialMediaLinks href='www.example.com'>
						<IconWrapper
							fill='currentColor'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='0'
							viewBox='0 0 24 24'>
							<path
								stroke='none'
								d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'></path>
							<circle cx='4' cy='4' r='2' stroke='none'></circle>
						</IconWrapper>
					</SocialMediaLinks>
				</SocialMediaWrapper>
			</FooterWrapper>
		</Footer>
	)
}

export default Footer

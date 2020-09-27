import React, { useEffect } from 'react'
import Typed from 'typed.js'

const Typing = () => {
	const options = {
		strings: [
			'I am Stefan Kalan.',
			'I am a...',
			'Javascript Developer',
			'NodeJS Developer',
			'Typescript Developer',
			'React Developer'
		],
		smartBackspace: true,
		typeSpeed: 100,
		backSpeed: 80,
		startDelay: 20,
		backDelay: 20,
		loop: true,
		showCursor: false,
		cursorChar: '|',
		autoInsertCss: true
	}

	useEffect(() => {
		const typed = new Typed('.type', options)
	}, [])

	return (
		<>
			<span className='type'></span>
			<style jsx>{`
				.type {
					font-size: 5.5rem;
					color: white;
				}
				.type:after {
					content: '|';
					display: inline;
					-webkit-animation: blink 0.5s infinite;
					-moz-animation: blink 0.5s infinite;
					animation: blink 0.5s infinite;
				}
				@media only screen and (max-width: 600px) {
					.type {
						font-size: 2rem;
					}
				}
				@keyframes blink {
					0% {
						opacity: 1;
					}
					50% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}
				@-webkit-keyframes blink {
					0% {
						opacity: 1;
					}
					50% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}
				@-moz-keyframes blink {
					0% {
						opacity: 1;
					}
					50% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}
			`}</style>
		</>
	)
}

export default Typing

import React from 'react'

function Hero() {
  return (
	<div className='w-screen md:flex md:flex-row items-center justify-center'>
		<img src='https://placedog.net/480/640?random' alt='hero'/>
		<div className='hidden md:block'>
			<h1>Madison</h1>
			<h1>Van</h1>
			<h1>Doren</h1>
		</div>
	</div>
  )
}

export default Hero
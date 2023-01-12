import React from 'react'
import Navbar from './Navbar.js'

export default function Header() {
  return (
	<div className='flex flex-col items-center'>
		<h1 className='text-3xl'>Header</h1>
		<Navbar/>
	</div>
  )
}

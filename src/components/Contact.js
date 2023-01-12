import React from 'react'

function Contact() {
  return (
	<div className='flex flex-col'>
		<h2>Contact:</h2>
			<div className='flex flex-col items-center'>
				<div className='flex flex-row w-full'>
					<input className='w-full' placeholder='last name'></input>
					<input className='w-full' placeholder='first name'></input>
				</div>
				<input className='w-full' placeholder='email'></input>
				<textarea className='w-full' placeholder='message'></textarea>
			</div>
		<button>Submit</button>
	</div>

  )
}

export default Contact
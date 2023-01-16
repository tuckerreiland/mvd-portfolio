import React from 'react'

function Contact() {
  return (
	<div className='flex flex-col justify-center'>
		<h2 className='text-xl bg-red-300 m-2 p-2 text-center w-fit font-proxima font-bold'>contact</h2>
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
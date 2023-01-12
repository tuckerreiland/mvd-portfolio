import React from 'react';
import NavbarButton from './NavbarButton';


function Navbar() {
	const menuItems = [
		{item:'about'},
		{item:'resume'},
		{item:'contact'},
		// line up each title with it's button in the nav bar (probably best to use grid layout for that)
		// script that highlights each button in the navbar with it's section background, so I'll do the thing I did on the space cowboy website to change the background
	]

	return (
			<div className='w-full flex flex-col items-center'>
				<div className='w-screen flex flex-row justify-evenly'>
					{menuItems.map((e)=>{
						return(
							<NavbarButton item={e.item}/>
						)
					})}
				</div>
			</div>
			
  	);
}

export default Navbar;
import React from "react";
function NavbarButton(props) {
	console.log(props)
	return (
		<button className='min-w-fit font-proxima font-bold'>
			{props.item}
		</button>
  	);
}

export default NavbarButton;
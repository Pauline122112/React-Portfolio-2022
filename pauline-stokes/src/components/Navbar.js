import React, {useState} from 'react'
import link from 'react-router-dom';
function navbar() {
  return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<link to="/" className="navbar-logo">
						TRVL <i className='fab fa-typo3'/>
					</link>
				</div>
			</nav>
		</>
	);
}

export default navbar
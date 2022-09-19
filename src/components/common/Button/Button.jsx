import React from 'react';
import './Button.scss';

const Button = (props) => {
	const { text, isFilled, className, isOranged, isGreen, isGray } = props;

	return (
		<button
			className={` button ${className} 
				${isFilled ? 'buttonFilled' : ''}   
				${isOranged ? 'orangeButton' : ''}
				${isGreen ? 'greenButton' : ''}             
				${isGray ? 'grayButton' : ''}             
                px-3`}
			type='submit'>
			{text}
		</button>
	);
};

export default Button;

import React from 'react';
import './AdvertisingCard.scss';

const AdvertisingCard = (props) => {
	const { image, company, price } = props;
	return (
		<div className='site-card-border-less-wrapper' id='advertisingCardContainer'>
			<img src={image} alt='advertising' className='image' />
			<h4>{company}</h4>
			<p>{price}</p>
		</div>
	);
};

export default AdvertisingCard;

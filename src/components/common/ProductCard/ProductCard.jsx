import React from 'react';
import './ProductCard.scss';
import Button from '../Button/Button';

const ProductCard = (props) => {
	const { name, bid, price, image, time } = props;
	return (
		<div className='site-card-border-less-wrapper' id='productCardContainer'>
			<div className='p-3'>
				<h4>{name}</h4>
				<p>{bid} </p>
				<div className='dollars'>
					<h5>{price}</h5>
				</div>
				<img src={image} alt='Rectangle 345' className='image' />

				<div className='d-flex flex-row justify-content-between mt-1 time-container'>
					<p className='time'>{time}</p>
					<p className='view'>View</p>
				</div>
			</div>
			<Button className='p-1' text='Join' isGreen={true} />
		</div>
	);
};

export default ProductCard;

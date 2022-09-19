import React from 'react';
import './SuggestedCard.scss';
import Button from '../Button/Button';

const SuggestedCard = (props) => {
	const { image, name, follower } = props;
	return (
		<div className='site-card-border-less-wrapper' id='suggestedCardContainer'>
			<img src={image} alt='Rectangle 246' className='image' />
			<h4>{name}</h4>
			<p>{follower}</p>
			<Button className='mt-2 p-1' text='Follow' isFilled={true} />
		</div>
	);
};

export default SuggestedCard;

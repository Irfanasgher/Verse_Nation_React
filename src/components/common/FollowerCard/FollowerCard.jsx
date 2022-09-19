import React from 'react';
import './FollowerCard.scss';
import Button from '../Button/Button';

const FollowerCard = (props) => {
	const { image, name, follower } = props;
	return (
		<div className='site-card-border-less-wrapper' id='cardContainer'>
			<div className='d-flex flex-row'>
				<img src={image} alt='Rectangle 15' className='image' />
				<div className='ml-2'>
					<h6 className='heading'>{name}</h6>
					<p className='follower'>{follower}</p>
					<div className='mt-2'>
						<Button text='Ignore' />
						<Button className='ml-1 mt-0' text='Follow' isFilled={true} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FollowerCard;

import React from 'react';
import './ArtistCard.scss';

const ArtistCard = (props) => {
	const { name, bid, image, detail } = props;
	return (
		<div className='site-card-border-less-wrapper' id='artistCardContainer'>
			<div className='d-flex flex-row'>
				<img src={image} alt='Screenshot_2' className='image' />
				<div className='ml-3'>
					<h4>{name}</h4>
					<h5>{bid} </h5>
					<p>{detail} </p>
				</div>
			</div>
		</div>
	);
};

export default ArtistCard;

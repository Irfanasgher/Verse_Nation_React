import React from 'react';
import './AlbumCard.scss';

const AlbumCard = (props) => {
	const { name, image, sub_name, detail } = props;
	return (
		<div className='site-card-border-less-wrapper' id='albumCardContainer'>
			<img src={image} alt='Rectangle 345' className='image' />
			{name ? <h4>Havana</h4> : ''}
			{sub_name ? <h5>Sara Evans</h5> : ''}
			<p>{detail} </p>
		</div>
	);
};

export default AlbumCard;

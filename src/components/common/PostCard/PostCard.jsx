import React from 'react';
import './PostCard.scss';
import Button from '../Button/Button';

const PostCard = (props) => {
	const { circleImage, name, date, detail, image } = props;
	return (
		<div className='site-card-border-less-wrapper' id='postCardContainer'>
			<div className='d-flex flex-row justify-content-between  m-3'>
				<div className='d-flex flex-row align-items-center'>
					<img src={circleImage} alt='Ellipse' className='image' />
					<div className='ml-2'>
						<h4>{name}</h4>
						<p>{date}</p>
					</div>
				</div>
				<img src='photos/more.png' alt='more' className='image1 mt-3 mr-2' />
			</div>
			<hr />
			<div className='m-3 '>
				<p style={{ color: '#7A7979', fontWeight: '600' }}>{detail}</p>
				<img src={image} alt='Ellipse' className='image34' width='100%' height='250px' />

				<div className='d-flex flex-row justify-content-between align-items-center'>
					<div className='icon-container d-flex flex-row justify-content-around align-items-center'>
						<img src='photos/fire.png' alt='Ellipse' width='100%' width='16px' height='20px' />
						<img src='photos/poop.png' alt='Ellipse' width='100%' width='22px' height='20px' />
						<img src='photos/fist.png' alt='Ellipse' width='100%' width='16px' height='20px' />
						<img src='photos/dislike.png' alt='Ellipse' width='100%' width='21px' height='20px' />
						<img src='photos/sad.png' alt='Ellipse' width='100%' width='20px' height='20px' />
					</div>
					<div>
						<Button className='mt-2 p-2' text='Repost' isOranged={true} />
						<Button className='mt-2 p-2 ml-3' text='Follow' isFilled={true} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCard;

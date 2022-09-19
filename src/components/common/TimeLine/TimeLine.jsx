import React from 'react';
import { Link } from 'react-router-dom';
import './TimeLine.scss';

const TimeLine = (props) => {
	const { text, arrow, image, active, link } = props;
	return (
		<div className={`site-card-border-less-wrapper ${active ? 'activeClass' : ''}`} id='timeLineCardContainer'>
			<Link to={link}>
				<div className='d-flex flex-row justify-content-between align-items-center'>
					<div className='d-flex flex-row align-items-center'>
						<img src={image} alt='Screenshot_2' className='image' />
						<p className='ml-3'>{text} </p>
					</div>
					{arrow ? (
						<img src='photos/Icon ionic-ios-arrow-forward.png' alt='Screenshot_2' className='image1' />
					) : (
						''
					)}
				</div>
			</Link>
		</div>
	);
};

export default TimeLine;

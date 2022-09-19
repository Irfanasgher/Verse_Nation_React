import React from 'react';
import './PostMusicCard.scss';
import Button from '../Button/Button';

const PostCard = (props) => {
	const { circleImage, name, date, detail, image } = props;
	return (
		<div className='site-card-border-less-wrapper' id='postMusicCardContainer'>
			<div className='d-flex flex-row justify-content-between  m-3'>
				<div className='d-flex flex-row align-items-center'>
					<img src='photos/Ellipse 1.png' alt='Ellipse' className='image' />
					<div className='ml-2'>
						<h4>Bianca Pierce</h4>
						<p>12-Aug-2020 , 05:00pm</p>
					</div>
				</div>
				<img src='photos/more.png' alt='more' className='image1 mt-3 mr-2' />
			</div>
			<hr />
			<div className='m-3 '>
				<div className='d-flex flex-row justify-content-between align-items-center'>
					<div className='d-flex flex-row'>
						<img src='photos/Icon ionic-ios-musical-notes.png' alt='Icon ionic-ios-musical-notes' />
						<p className='listening ml-2'>Currently listening to All about that</p>
					</div>
					<Button className='p-1' text='Add to Library' isGray={true} />
				</div>

				<div className='d-flex flex-row justify-content-between mt-2 music-container'>
					<img src='photos/Rectangle 225.png' alt='Icon ionic-ios-musical-notes' />
					<div className='p-3'>
						<div className='d-flex flex-row justify-content-between'>
							<div className='d-flex flex-row align-items-center'>
								<img src='photos/Icon ionic-ios-play-circle.png' alt='Icon ionic-ios-musical-notes' />
								<h6 className='ml-2' style={{ fontSize: '14px', marginBottom: '0px' }}>
									All about that bass
								</h6>
							</div>
							<p>12-Aug-2020 , 05:00pm</p>
						</div>
						<img
							src='photos/Mask Group 3.png'
							alt='Icon ionic-ios-musical-notes'
							className='mt-3'
							style={{ width: '330px' }}
						/>
					</div>
				</div>

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

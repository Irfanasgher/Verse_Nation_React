import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import './style.scss';
import { FollowerData } from '../../data/LandingPage/followers';
import { AdvertisingData } from '../../data/LandingPage/advertisingData';
import { PostData } from '../../data/LandingPage/postData';
import { TimeLineData } from '../../data/LandingPage/timeLineData';
import { SuggestedData } from '../../data/LandingPage/suggestedData';
import FollowerCard from '../../components/common/FollowerCard/FollowerCard';
import AdvertisingCard from '../../components/common/AdvertisingCard/AdvertisingCard';
import PostCard from '../../components/common/PostCard/PostCard';
import PostMusicCard from '../../components/common/PostMusicCard/PostMusicCard';
import TimeLine from '../../components/common/TimeLine/TimeLine';
import SuggestedCard from '../../components/common/SuggestedCard/SuggestedCard';

class Index extends Component {
	render() {
		// let Followers = FollowerData.slice(0, 3).map((data, index) => {
		// 	return <FollowerCard image={data.image} name={data.name} follower={data.follower} key={index} />;
		// });

		let Followers = FollowerData.map((data, index) => {
			return <FollowerCard image={data.image} name={data.name} follower={data.follower} key={index} />;
		});

		let Advertising = AdvertisingData.map((data, index) => {
			return <AdvertisingCard image={data.image} company={data.company} price={data.price} key={index} />;
		});

		let PostCardData = PostData.map((data, index) => {
			return (
				<PostCard
					circleImage={data.circleImage}
					image={data.image}
					name={data.name}
					date={data.date}
					detail={data.detail}
					key={index}
				/>
			);
		});

		let TimeLineD = TimeLineData.map((data, index) => {
			return <TimeLine image={data.image} text={data.text} arrow={data.arrow} link={data.link} key={index} />;
		});

		let Suggested = SuggestedData.map((data, index) => {
			return <SuggestedCard image={data.image} name={data.name} follower={data.follower} key={index} />;
		});

		return (
			<div style={{ backgroundColor: '#E9EEFF', padding: '50px' }}>
				<Row gutter={40}>
					<Col span={6}>
						<div className='rightSideBar'>
							<Input
								placeholder='Search people'
								style={{ borderRadius: '50px', width: '90%', height: '30px', margin: '15px 10px' }}
							/>

							{TimeLineD}
						</div>
						<h1 className='mt-3 heading'>Trending Artist</h1>

						<div className='rightSideBar mt-3' style={{ padding: '15px' }}>
							<div className='d-flex flex-row justify-content-between see-all'>
								<p />
								<p>See all</p>
							</div>
							{Followers}
						</div>
					</Col>
					<Col span={12} style={{ padding: '0' }}>
						<PostMusicCard />
						{PostCardData}

						<div className='suggested d-flex flex-row justify-content-around align-items-center'>
							{Suggested}
						</div>
					</Col>
					<Col span={6}>
						<div className='leftSideBar pt-4'>
							<h1>ADVERTISING</h1>
							<hr className='mt-4' />

							<div style={{ padding: '15px' }}>{Advertising}</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}
export default Index;

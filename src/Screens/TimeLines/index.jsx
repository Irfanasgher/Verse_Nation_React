import React, { Component } from 'react';
import './style.scss';
import { FollowerData } from '../../data/LandingPage/followers';
import { AdvertisingData } from '../../data/LandingPage/advertisingData';
import { PostData } from '../../data/LandingPage/postData';
import { TimeLineData } from '../../data/TimeLinePage/timeLineData';
import TimeLine from '../../components/common/TimeLine/TimeLine';
import FollowerCard from '../../components/common/FollowerCard/FollowerCard';
import AdvertisingCard from '../../components/common/AdvertisingCard/AdvertisingCard';
import PostCard from '../../components/common/PostCard/PostCard';

import { Row, Col, Input, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
	<Menu>
		<Menu.Item>
			<a target='_blank' rel='noopener noreferrer'>
				1st menu item
			</a>
		</Menu.Item>
		<Menu.Item>
			<a target='_blank' rel='noopener noreferrer'>
				2nd menu item
			</a>
		</Menu.Item>
		<Menu.Item>
			<a target='_blank' rel='noopener noreferrer'>
				3rd menu item
			</a>
		</Menu.Item>
	</Menu>
);

class Index extends Component {
	render() {
		function callback(key) {
			console.log(key);
		}

		let Followers = FollowerData.slice(0, 3).map((data, index) => {
			return <FollowerCard image={data.image} name={data.name} follower={data.follower} key={index} />;
		});

		let Advertising = AdvertisingData.slice(0, 2).map((data, index) => {
			return <AdvertisingCard image={data.image} company={data.company} price={data.price} key={index} />;
		});

		let PostCardData = PostData.slice(0, 2).map((data, index) => {
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
			return (
				<TimeLine
					image={data.image}
					text={data.text}
					arrow={data.arrow}
					link={data.link}
					key={index}
					active={data.active}
				/>
			);
		});

		return (
			<div style={{ backgroundColor: '#E9EEFF', padding: '50px' }}>
				<Row gutter={40}>
					{/* <Col span={1} /> */}
					<Col span={6}>
						<div className='rightSideBar'>
							<Input
								placeholder='Search people'
								style={{ borderRadius: '50px', width: '90%', height: '30px', margin: '15px 10px' }}
							/>
							{TimeLineD}
						</div>
						<h1 className='mt-3 heading'>Who to Follow</h1>

						<div className='rightSideBar mt-3' style={{ padding: '15px' }}>
							<div className='d-flex flex-row justify-content-between see-all'>
								<p />
								<p>See all</p>
							</div>
							{Followers}

							<img src='photos/Rectangle 143.png' alt='Rectangle 143' width='100%' />
						</div>
					</Col>
					{/* <Col span={1} /> */}
					<Col span={12} style={{ backgroundColor: 'white', borderRadius: '7px', padding: '20px' }}>
						<Input
							placeholder='What&#39;s on your mind'
							style={{
								borderRadius: '50px',
								width: '100%',
								height: '30px',
								margin: '15px 10px 15px 0px'
							}}
						/>
						<div className='d-flex flex-row justify-content-between mb-3'>
							<div className='d-flex flex-row align-items-center'>
								<img
									src='photos/Nation Timeline.png'
									alt='Nation Timeline'
									height='15px'
									width='15px'
								/>
								<p className='Attachment pl-2'>Media</p>
							</div>
							<div className='d-flex flex-row align-items-center'>
								<img
									src='photos/Nation Timeline.png'
									alt='Nation Timeline'
									height='15px'
									width='15px'
								/>
								<p className='Attachment pl-2'>Attachment</p>
							</div>
							<div>
								<Dropdown overlay={menu}>
									<a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
										Type <DownOutlined />
									</a>
								</Dropdown>
							</div>
						</div>
						{PostCardData}
					</Col>
					{/* <Col span={1} /> */}
					<Col span={6}>
						<div className='leftSideBar pt-4'>
							<h1>Live Auction</h1>
							<hr className='mt-4' />

							<div style={{ padding: '15px' }}>{Advertising}</div>
						</div>

						<div className='leftSideBar mt-3 pt-4'>
							<h1>Direct Selling</h1>
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

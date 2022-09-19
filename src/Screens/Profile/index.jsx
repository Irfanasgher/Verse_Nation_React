import React, { Component } from 'react';
import './style.scss';
import { FollowerData } from '../../data/LandingPage/followers';
import { AdvertisingData } from '../../data/LandingPage/advertisingData';
import { ProfileTimeLineData } from '../../data/ProfilePage/timeLineData';
import { PostData } from '../../data/LandingPage/postData';
import { AlbumData } from '../../data/ProfilePage/profileAlbumCardData';

import TimeLine from '../../components/common/TimeLine/TimeLine';
import FollowerCard from '../../components/common/FollowerCard/FollowerCard';
import AdvertisingCard from '../../components/common/AdvertisingCard/AdvertisingCard';
import PostCard from '../../components/common/PostCard/PostCard';
import Button from '../../components/common/Button/Button';
import AlbumCard from '../../components/common/AlbumCard/AlbumCard';

import { Row, Col, Input, Tabs, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;

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
		let Followers = FollowerData.slice(0, 3).map((data, index) => {
			return <FollowerCard image={data.image} name={data.name} follower={data.follower} key={index} />;
		});

		let Advertising = AdvertisingData.slice(0, 2).map((data, index) => {
			return <AdvertisingCard image={data.image} company={data.company} price={data.price} key={index} />;
		});

		let TimeLineD = ProfileTimeLineData.map((data, index) => {
			return (
				<TimeLine
					image={data.image}
					text={data.text}
					arrow={data.arrow}
					key={index}
					link={data.link}
					active={data.active}
				/>
			);
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

		let Albums = AlbumData.map((data, index) => {
			return (
				<Col span={8}>
					<AlbumCard image={data.image} detail={data.detail} key={index} />
				</Col>
			);
		});

		return (
			<div style={{ backgroundColor: '#E9EEFF', padding: '50px' }} id='profile'>
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
					<Col
						span={12}
						style={{ backgroundColor: 'white', borderRadius: '7px', padding: '0px', overflow: 'hidden' }}>
						<img src='photos/Rectangle 86.png' alt='Rectangle 86' height='187px' width='100%' />
						<div
							className='d-flex flex-row justify-content-between align-items-center'
							style={{ paddingRight: '20px', paddingLeft: '20px', marginTop: '-60px' }}>
							<div className='text-center'>
								<img
									src='photos/Ellipse 20.png'
									alt='Nation Timeline'
									height='130px'
									width='130px'
									style={{ borderRadius: '50%', border: '2px solid #7AC133' }}
								/>
								<h2 className='mt-2'>Tom Fishe</h2>
							</div>
							<Button text='Follow' isFilled={true} />
						</div>
						<div className='px-4'>
							<p className='status'>
								{' '}
								<span>Status:</span> Underground or Mainstream |{' '}
								<span className='type'>Artist type</span> : type 1, type 2, ...
							</p>
							<div className='d-flex flex-row justify-content-between' style={{ width: '40%' }}>
								<p className='follower'>
									<span>100</span> Followers{' '}
								</p>
								<p className='follower'>
									<span>100</span> Following{' '}
								</p>
							</div>
							<p className='detail'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis.
								Iaculis
							</p>

							<div className='card-container'>
								<Tabs type='card'>
									<TabPane tab='Timeline' key='1' className='p-1'>
										{PostCardData}
									</TabPane>
									<TabPane tab='Content' key='2' className='p-1'>
										<Input
											placeholder='Search people'
											style={{
												borderRadius: '50px',
												width: '100%',
												height: '30px'
											}}
										/>

										<div className='d-flex flex-row justify-content-end mt-3'>
											<Dropdown overlay={menu}>
												<a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
													Type <DownOutlined />
												</a>
											</Dropdown>

											<Dropdown overlay={menu} className='ml-3'>
												<a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
													Updated <DownOutlined />
												</a>
											</Dropdown>

											<Dropdown overlay={menu} className='ml-3'>
												<a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
													Sort By <DownOutlined />
												</a>
											</Dropdown>
										</div>
										<Row gutter={20} className='mt-4'>
											{Albums}
										</Row>
									</TabPane>
									<TabPane tab='About' key='3' className='p-1'>
										<Input
											placeholder='Search people'
											style={{
												borderRadius: '50px',
												width: '100%',
												height: '30px'
											}}
										/>
										<div className='d-flex flex-row justify-content-between mt-3'>
											<p className='following'>Following:</p>
											<p className='see-all'>See all</p>
										</div>

										<Row gutter={20}>
											<Col span={8}>
												<div className='d-flex flex-row following-card'>
													<img src='photos/Rectangle 19.png' alt='Rectangle 19' />
													<div className='ml-3 name'>
														<h1>Diana Pierce</h1>
														<Button text='Follow' isFilled={true} />
													</div>
												</div>
											</Col>

											<Col span={8}>
												<div className='d-flex flex-row following-card'>
													<img src='photos/Rectangle 19.png' alt='Rectangle 19' />
													<div className='ml-3 name'>
														<h1>Diana Pierce</h1>
														<Button text='Follow' isFilled={true} />
													</div>
												</div>
											</Col>

											<Col span={8}>
												<div className='d-flex flex-row following-card'>
													<img src='photos/Rectangle 19.png' alt='Rectangle 19' />
													<div className='ml-3 name'>
														<h1>Diana Pierce</h1>
														<Button text='Follow' isFilled={true} />
													</div>
												</div>
											</Col>

											<Col span={8}>
												<div className='d-flex flex-row following-card'>
													<img src='photos/Rectangle 19.png' alt='Rectangle 19' />
													<div className='ml-3 name'>
														<h1>Diana Pierce</h1>
														<Button text='Follow' isFilled={true} />
													</div>
												</div>
											</Col>

											<Col span={8}>
												<div className='d-flex flex-row following-card'>
													<img src='photos/Rectangle 19.png' alt='Rectangle 19' />
													<div className='ml-3 name'>
														<h1>Diana Pierce</h1>
														<Button text='Follow' isFilled={true} />
													</div>
												</div>
											</Col>

											<Col span={8}>
												<div className='d-flex flex-row following-card'>
													<img src='photos/Rectangle 19.png' alt='Rectangle 19' />
													<div className='ml-3 name'>
														<h1>Diana Pierce</h1>
														<Button text='Follow' isFilled={true} />
													</div>
												</div>
											</Col>
										</Row>

										<Row className='mt-4'>
											<Col span={12}>
												<h1 className='work'>Work</h1>
												<Input
													style={{
														width: '90%',
														height: '50px',
														borderRadius: '5px'
													}}
													className='mt-3'
												/>
												<h1 className='work mt-3'>Place Live</h1>
												<img
													src='photos/Rectangle 185.png'
													alt='Rectangle 185'
													className='map-image mt-3'
												/>
											</Col>
											<Col span={12}>
												<h1 className='contact'>Contact Information</h1>
												<div className='detail-container mt-3'>
													<p>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
														eiusmod tempor incididunt ut labore et dolore magna aliqua.
														Bibendum est ultricies integer quis. Iaculis urna id volutpat
														lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
														odio tempor orci dapibus ultrices in. Egestas diam in arcu
														cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt
														ornare massa eget egestas purus viverra accumsan in nisl. Tempor
														id eu nisl nunc mi ipsum faucibus.
													</p>
												</div>
											</Col>
										</Row>
									</TabPane>
								</Tabs>
							</div>
						</div>
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

import React, { Component } from 'react';
import './style.scss';
import { FollowerData } from '../../data/LandingPage/followers';
import { AdvertisingData } from '../../data/LandingPage/advertisingData';
import { TimeLineData } from '../../data/StorePage/timeLineData';
import { ProductData } from '../../data/StorePage/productCardData';

import TimeLine from '../../components/common/TimeLine/TimeLine';
import FollowerCard from '../../components/common/FollowerCard/FollowerCard';
import AdvertisingCard from '../../components/common/AdvertisingCard/AdvertisingCard';
import ProductCard from '../../components/common/ProductCard/ProductCard';

import { Row, Col, Input, Tabs, Radio } from 'antd';
const { TabPane } = Tabs;

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

		let Poducts = ProductData.map((data, index) => {
			return (
				<Col span={8}>
					<ProductCard
						name={data.name}
						bid={data.bid}
						price={data.price}
						image={data.image}
						time={data.time}
						key={index}
					/>
				</Col>
			);
		});

		return (
			<div style={{ backgroundColor: '#E9EEFF', padding: '50px' }} id='store'>
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
					<Col span={12} style={{ backgroundColor: 'white', borderRadius: '7px', padding: '0px' }} centered>
						<Tabs defaultActiveKey='1' onChange={callback} tabBarGutter={12}>
							<TabPane tab='Direct Sell' key='1'>
								<div className='px-4'>
									<Input
										placeholder='Search'
										style={{
											borderRadius: '50px',
											width: '100%',
											height: '30px',
											margin: '15px 10px 15px 0px'
										}}
									/>

									<Radio.Group>
										<Radio value={1}>ongoing</Radio>
										<Radio value={2}>Soldout</Radio>
									</Radio.Group>

									<Row gutter={16} className='mt-3'>
										{Poducts}
									</Row>
								</div>
							</TabPane>

							<TabPane tab='All Auction' key='2'>
								<div className='px-4'>
									<Input
										placeholder='Search'
										style={{
											borderRadius: '50px',
											width: '100%',
											height: '30px',
											margin: '15px 10px 15px 0px'
										}}
									/>

									<Radio.Group>
										<Radio value={1}>Live</Radio>
										<Radio value={2}>UpComming</Radio>
										<Radio value={3}>Recently Closed</Radio>
									</Radio.Group>

									<Row gutter={16} className='mt-3'>
										{Poducts}
									</Row>
								</div>
							</TabPane>
						</Tabs>
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

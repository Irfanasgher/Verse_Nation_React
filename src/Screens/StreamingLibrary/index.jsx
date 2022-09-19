import React, { Component } from 'react';
import './style.scss';
import { AlbumData } from '../../data/Streaming/streamingAlbumData';

import TimeLine from '../../components/common/TimeLine/TimeLine';
import AlbumCard from '../../components/common/AlbumCard/AlbumCard';

import { Row, Col, Input } from 'antd';

class Index extends Component {
	render() {
		function callback(key) {
			console.log(key);
		}

		let Albums = AlbumData.map((data, index) => {
			return (
				<Col span={6}>
					<AlbumCard
						name={data.name}
						sub_name={data.sub_name}
						image={data.image}
						detail={data.detail}
						key={index}
					/>
				</Col>
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
							<TimeLine text='Browser' image={'photos/Notification.png'} link={'/streamingScreen'} />
							<TimeLine
								text='My Library'
								arrow={false}
								image={'photos/Notification.png'}
								link={'/streamingLibraryScreen'}
								active={true}
								arrow={true}
							/>
							<TimeLine text='Radio' arrow={false} image={'photos/Notification.png'} />
							<TimeLine text='Upload Content' image={'photos/Notification.png'} />
						</div>
						<h1 className='mt-3 heading'>Who to Follow</h1>

						<div className='rightSideBar mt-3' style={{ padding: '15px' }}>
							<img src='photos/Rectangle 143.png' alt='Rectangle 143' width='100%' height='262px' />
							<img
								src='photos/Rectangle 202.png'
								alt='Rectangle 143'
								width='100%'
								height='252px'
								className='mt-2'
							/>
						</div>
					</Col>
					<Col span={18} style={{ backgroundColor: 'white', borderRadius: '7px', padding: '0px' }}>
						<h1 className='trendings m-3 ml-5'>My Library</h1>
						<hr />
						<div className='px-5'>
							<p className='albums'>Top Favourite</p>
							<Row gutter={25}>{Albums}</Row>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}
export default Index;

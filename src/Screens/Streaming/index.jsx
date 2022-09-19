import React, { Component } from 'react';
import './style.scss';
import { AlbumData } from '../../data/Streaming/streamingAlbumData';
import { ArtistData } from '../../data/Streaming/streamingArtistData';

import TimeLine from '../../components/common/TimeLine/TimeLine';
import ArtistCard from '../../components/common/ArtistCard/ArtistCard';
import AlbumCard from '../../components/common/AlbumCard/AlbumCard';

import { Row, Col, Input, Tabs, Radio } from 'antd';
const { TabPane } = Tabs;

class Index extends Component {
	render() {
		function callback(key) {
			console.log(key);
		}

		let Albums = AlbumData.slice(0, 6).map((data, index) => {
			return (
				<Col span={8}>
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

		let Artists = ArtistData.slice(0, 6).map((data, index) => {
			return <ArtistCard name={data.name} bid={data.bid} image={data.image} detail={data.detail} key={index} />;
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
							<TimeLine
								text='Browser'
								image={'photos/Notification.png'}
								active={true}
								arrow={true}
								link={'/streamingScreen'}
							/>
							<TimeLine
								text='My Library'
								arrow={false}
								image={'photos/Notification.png'}
								link={'/streamingLibraryScreen'}
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
					{/* <Col span={1} /> */}
					<Col span={12} style={{ backgroundColor: 'white', borderRadius: '7px', padding: '0px' }}>
						<h1 className='trendings m-3'>Trendings</h1>
						<hr />
						<div className='px-3'>
							<p className='albums'>Albums</p>
							<Row gutter={20}>{Albums}</Row>
						</div>
					</Col>
					{/* <Col span={1} /> */}
					<Col span={6}>
						<div className='leftSideBar pt-4'>
							<h1>New Artists</h1>
							<hr className='mt-4' />

							<div style={{ padding: '15px' }}>{Artists}</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}
export default Index;

import React from 'react';
import './overview.css';
import {PieChart} from '../../../components/chart/chart';
import {pieData} from '../../../const/data';
import user from '../../../user.png';

const arr = pieData(); 

export default props => (
	<div className="overview-wrap">
		<div className="overview">
			<div className="overview-title">ChatDaddy Success Index (CSI)</div>
			<div className="overview-desc">Your ChatDaddy Success Index (CSI) measures how effective you are at building your database, interacting with people, delivering marketing campaigns and setting up automations. It is updated daily.</div>
			<div className="overview-desc-chart-wrap">
				<div className="overview-pie-wrap">
					<PieChart data={arr} />
					<div className="overview-pie-total">
						<div className="overview-pie-total-value">{100 - arr.data[4].value}</div>
						<div className="overview-pie-total-desc">Out of 100</div>
					</div>
				</div>
				<div className="overview-desc-bars">
					{arr.data.map((key, index) => (
						index !== 4 ?
							<div key={index} className="overview-bar-wrap">
								<div className="overview-bar-desc">{key.label}</div>
								<div className="overview-bar-progress">
									<div style={{backgroundColor: key.color, width: (key.value*4)+'%'}}
										className="overview-bar-progress-scale"
									></div>
									<div className="overview-bar-progress-value"
										style={{left: (key.value*4-5)+'%'}}
									>
										{key.value}
									</div>
								</div>
							</div>
						: null
					))}
				</div>
			</div>
		</div>
		<div className="overview-bottom">
			<img className="overview-bottom-user" src={user} alt="user" />
			<div style={{fontSize: '36px', fontWeight: 700}}>Want to Get a Higher Score?</div>
			<div style={{fontSize: '24px'}}>Chat with our consultant Kenny for tips & recommendations: +852 6801 9530</div>
		</div>
	</div>
)
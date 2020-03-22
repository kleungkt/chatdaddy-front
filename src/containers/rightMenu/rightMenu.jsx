import React from 'react';
import './rightMenu.css';
import arrow from './img/arrow.png';

import ActionsMenu from './actionsMenu/actionsMenu';
import RowMenu from './rowMenu/rowMenu';


const actionsRows = ['Message', 'Contact', 'Image', 'Audio'];

export default props => {

	return(
		<div style={{display: props.status.open ? 'block' : 'none'}} className="right-menu">
			<div className="right-top">
				<div className="right-title">New Campaign</div>
				<div className="right-select">
					<div className="right-select-wrap">
						<span className="right-row-label">Targeting</span>
						<div className="select-segment">
							<div>Select segment</div>
							<img src={arrow} alt="arrow" />
						</div>
					</div>
					<div className="right-select-wrap">
						<span className="right-row-label">Sending Speed</span>
						<div className="sending-speed">
							<div>Slow</div>
							<img src={arrow} alt="arrow" />
						</div>
					</div>
				</div>
			</div>
			<div className="right-center">
				<div className="right-row-label"
					style={{marginLeft: '70px'}}
				>
					{props.rightRow}
				</div>
				<RowMenu status={{content: props.rightRow}} />
				<ActionsMenu rows={actionsRows} rightRowClick={props.rightRowClick} />
			</div>
			<div className="right-bottom">
				<div>
					<span style={{color: '#0094c5'}}
						onClick={props.closeRightMenu}
					>Send Now</span>
					<span style={{color: '#324d65', marginLeft: '40px'}}
						onClick={props.closeRightMenu}
					>Schedule</span>
				</div>
				<span style={{color: '#90aabf'}}
					onClick={props.closeRightMenu}
				>Save as draft</span>
			</div>
		</div>
	)
}
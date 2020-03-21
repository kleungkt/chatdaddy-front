import React from 'react';
import './user.css';
import down from './img/down.png';

export default props => (
	<div className="user">
		<img className="user-image" src={props.user.photo} alt="user" />
		<div style={{marginLeft: '22px'}}>
			<div className="user-name">{props.user.name}</div>
			<div className="user-status">{props.user.status}</div>
		</div>
		<img style={{marginLeft: '20px'}} src={down} alt="down" />
	</div>
)
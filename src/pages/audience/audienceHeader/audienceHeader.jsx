import React from 'react';
import './audienceHeader.css';
import arrow from './img/arrow.png';

const actions = ['Add contact', 'Import', 'Export', 'Search Message History'];

export default props => (
	<div className="audience-header">
		<input className="audience-header-input" placeholder="Search..." />
		<div className="audience-header-center">
			<div className="audience-header-move">
				<div className="audience-header-round"></div>
				Individual
			</div>
			<div className="audience-header-center-menu">
				{actions.map((key, index) => (
					<div key={index}>{key}</div>
				))}
			</div>
		</div>
		<div className="audience-header-select">
			<span>Everyone</span>
			<img src={arrow} alt="arrow" />
		</div>
	</div>
)
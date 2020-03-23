import React from 'react';
import './audienceHeader.css';
import arrow from './img/arrow.png';

const actions = ['Add contact', 'Import', 'Export', 'Search Message History'];

export default props => (
	<div className="audience-header">
		<input onChange={props.getWhiteMenu.bind(this, 'input')} className="audience-header-input" placeholder="Search..." />
		<div className="audience-header-center">
			<div className={props.move ? 'audience-header-move' : 'audience-header-move audience-move'} 
				onClick={props.moveClick}
			>
				<div className={props.move ? 'audience-header-round' : 'audience-header-round audience-header-round-right'}></div>
				{props.move ? 'Individual' : 'Group'}
			</div>
			<div className="audience-header-center-menu">
				{actions.map((key, index) => (
					<div onClick={props.getWhiteMenu.bind(this, key)} key={index}>{key}</div>
				))}
			</div>
		</div>
		<div onClick={props.getWhiteMenu.bind(this, 'Everyone')} className="audience-header-select">
			<span>Everyone</span>
			<img src={arrow} alt="arrow" />
		</div>
	</div>
)
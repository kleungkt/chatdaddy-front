import React from 'react';
import './audienceHeader.css';
import arrow from './img/arrow.png';
import MoveButton from '../../../components/moveButton/moveButton';

const actions = ['Add contact', 'Import', 'Export', 'Search Message History'];

export default props => (
	<div className="audience-header">
		<input onChange={props.getWhiteMenu.bind(this, 'input')} className="audience-header-input" placeholder="Search..." />
		<div className="audience-header-center">
			<MoveButton move={props.move} moveClick={props.moveClick} />
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
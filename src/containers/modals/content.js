import React from 'react';
import arrow from './img/arrow.png';
import splus from './img/splus.png';
import bplus from './img/bplus.png';

const input = name => (
	<div className="modal-audience-input">
		<label>{name}</label>
		<input type="text" />
	</div>
);

const inputOne = (text, width) => (<input style={{width: width}} placeholder={text} className="modal-audience-input-one" type="text" />);
const labelOne = name => (<div style={{marginTop: '20px'}} className="modal-audience-label-one">{name}</div>);
const selectOne = (text, width) => (
	<div style={{width: width}} className="modal-audience-select">
		<div>{text}</div>
		<img src={arrow} alt="arrow" />
	</div>
);
const buttonOne = text => (<div className="modal-audience-row-button">{text}</div>);
const plusSmall = () => (
	<div className="modal-small-plus">
		<img src={splus} alt="plus" />
	</div>
);

export const content = {
	get: function(name) {
		if(!name) return;
		if(this[name]) return this[name];
	},
	'Add contact': {
		size: [410, 440],
		button: 'Save',
		content: (
			<div>
				{input('Name')}
				{input('Whatsapp')}
			</div>
		)
	},
	'Search Message History': {
		size: [560, 320],
		button: 'Search',
		content: (<div>{input('Message text')}</div>)
	},
	'Add New Segment': {
		size: [715, 920],
		button: 'Save',
		content: (
			<div>
				{input('Segment Name')}
				{labelOne('All of the following conditions')}
				<div className="modalaudience-row-wrap">
					{selectOne('Warm Score', 300)}
					{selectOne('Cold', 290)}
				</div>
				<div className="modalaudience-row-wrap">
					{selectOne('Message Histoty', 300)}
					{inputOne('HAHAHA', 290)}
				</div>
				<div className="modalaudience-row-wrap">
					{selectOne('Tag', 300)}
					{buttonOne('Oysters', 290)}
					{plusSmall()}
				</div>
				<div className="modalaudience-row-wrap">
					{selectOne('Last Seen', 195)}
					{selectOne('Before', 195)}
					{inputOne('', 180)}
				</div>
				<div className="modalaudience-row-wrap">
					{selectOne('Message Sent', 225)}
					{selectOne('Larget Than', 195)}
					{inputOne('', 155)}
				</div>
				<div className="modal-small-plus bplus">
					<img src={bplus} alt="plus" />
				</div>
			</div>
		)
	},
	'Add New Segment-mess': {
		size: [715, 580],
		button: 'Save',
		content: (
			<div>
				{input('Segment Name')}
				{labelOne('All of the following conditions')}
				<div className="modalaudience-row-wrap">
					{selectOne('Warm Score', 300)}
					{selectOne('Cold', 290)}
				</div>
				<div className="modal-small-plus bplus">
					<img src={bplus} alt="plus" />
				</div>
			</div>
		)
	}
} 
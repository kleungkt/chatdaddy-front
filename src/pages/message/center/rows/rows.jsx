import React from 'react';
import './rows.css';

export const data = [
	['4:52 PM', 'Of course it would be appreciated if you can do these now, making it complete.'],
	[ '4:52 PM', 'All right, I will do it'],
	['4:53 PM', 'Thanks mate!'],
	['4:54 PM', 'couple of hours'],
	['6:06 PM', 'I added the first step of the menu, and uploaded it to the server.'],
	['10:06 PM', 'date-01 Apr'],
	['7:28 PM', 'Next task we want you to work on the AUDIENCE part'],
	['7:28 PM', 'img-1'], ['7:28 PM', 'img-2'], ['7:28 PM', 'img-3'],
	['7:41 PM', 'Hi Simon, ok']
]

const getArrow = (index, f) => index % 3 === 0 ? <img className="messages-arrow" onClick={f.bind(this, 'message')} src={require('../../img/arrow.png')} alt="arrow" /> : null

export const oneMessage = (text, index, f) => {
	if(text.split('-')[0] === 'date') return (
		<div key={index} style={{textAlign: 'center', marginBottom: '15px', color: '#717171'}}>
			<span className="messages-left">{text.split('-')[1]}</span>
		</div>
	)
	if(text.split('-')[0] === 'img') return (
		<div key={index} className="one-message">
			<img className="message-image" src={require('./img/'+text.split('-')[1]+'.png')} alt="mes-img" />
		</div>
	)
	return(
		index % 2 === 0 ?
			<div key={index} className="one-message">
				<div className="messages-left">{text}{getArrow(index, f)}</div>
				<span></span>

			</div>
		:
			<div key={index} className="one-message">
				
				<span></span>
				<div className="messages-right">{text}{getArrow(index, f)}</div>
			</div>
	)
}

export const dateMessage = (date, name) => (
	<div className="one-message">
		<span></span>
		<div  className="messages-left"
			style={{opacity: 0.4, fontSize: '14px', marginRight: '-50px'}}
		>
			<span>{date}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<span>{name}</span>
		</div>
	</div>
)
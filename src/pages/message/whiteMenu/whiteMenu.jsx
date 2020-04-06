import React from 'react';
import './whiteMenu.css';
import rows from './rows.js';
import userLogo from '../../../components/table/img/user.png';
import cross from './img/cross.png';

export default props => {
	let name = props.status.menu;
	if(!props.status.menu || !rows[props.status.menu]) return null;

	let style = {}, c = props.status.c;
	switch(name) {
		case 'input' :
			style = {
				width: c.width + 60,
				left: c.x,
				top: c.y + c.height + window.pageYOffset
			}
		break;
		case 'Everyone' :
			style = {
				width: 240,
				left: c.x - 100,
				top: c.y + c.height + window.pageYOffset
			}
		break;
		case 'profile' :
			style = {
				width: 'auto',
				left: c.x + 20,
				top: c.y - 120 + window.pageYOffset
			}
		break;
		case 'chat' :
			style = {
				width: 'auto',
				left: c.x + 20,
				top: c.y - 100 + window.pageYOffset
			}
		break;
		case 'message' :
			style = {
				width: 'auto',
				left: c.left + c.width - 165,
				top: c.y + c.height + window.pageYOffset
			}
		break;
		case 'send' :
			style = {
				width: 'auto',
				left: c.x-40,
				top: c.y + c.height + window.pageYOffset - 35
			}
		break;
		default :
			style = {
				width: 'auto',
				left: c.x,
				top: c.y + c.height + window.pageYOffset
			}
		break;
	}

	style.padding = name === 'time' ? '10px' : '25px 25px 15px 25px';

	return(
		<div className={name === 'input' || name === 'Everyone' ? 'white-menu white-menu-list' : 'white-menu'}
			style={style}
		>
			{name === 'send' ?
				<div className="white-menu-send">
					<div>Send now</div>
					<img src={require('../img/arrow.png')} alt="arrow" />
				</div>
			: null}
			{name === 'input' ?
				<div>
					<div className="menu-input-top">
						{rows[name].map((key, index) => (
							<div key={index} className="tag-row">{key}</div>
						))}
					</div>
					<div style={{display: 'flex', alignItems: 'center'}}>
						<img style={{marginRight: '15px'}} src={userLogo} alt="user" />
						<div className="menu-user-wrap">
							<span style={{fontSize: '20px', fontWeight: 700}}>Kenny Lim</span>
							<span style={{color: 'rgb(0, 146, 195)'}}>+853 156132165</span>
						</div>
					</div>
				</div>
			: name === 'Everyone' ?
				<div>
					{rows[name].map((key, index) => (
						<div key={index} className="everyone-wrap">
							<div style={{cursor: 'pointer'}} onClick={props.clickWhiteMenu}>
								<div className="everyone-title">{key}</div>
								<div className="everyone-desc">{key === 'Oyster Gand' ? 'Tagget With "Oysters" warm score...' : 'Message History Contains "hahaha"'}</div>
							</div>
							<img className="everyone-cross" src={cross} alt="cross" />
						</div>
					))}
					<div className="everyone-new" onClick={props.getModal.bind(this, 'Add New Segment-mess')}>Add New Segment</div>
				</div>
			: name === 'time' ?
				<div className="white-menu-select">
					{rows[name].map((key, index) => (
						<React.Fragment>
							<div key={index} className="white-menu-select-one">
								<div>{key}</div>
								<img src={require('../img/arrow.png')} alt="arrow" />
							</div>
							{index === 2 ? <span>:</span> : null} 
						</React.Fragment>
					))}
					<img style={{cursor: 'pointer'}} onClick={props.clickWhiteMenu} src={require('./img/check.png')} alt="check" />
				</div>
			: rows[name].map((key, index) => (
				<div onClick={props.clickWhiteMenu} key={index} className="white-menu-row">{key}</div>
			))}
		</div>
	)
}
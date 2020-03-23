import React from 'react';
import './mainMenuNavigation.css';
import {NavLink} from "react-router-dom";

export default props => (
	<div className="main-menu-navigation">
		{props.menu.map((key, index)=> (
        	<NavLink to={'/'+key.toLowerCase()} key={index} className="main-menu-entity">
				<img src={require('./img/'+key+'.png')} alt={key} title={key} />
				<div style={{marginLeft: '20px'}}>{key}</div>
			</NavLink>
    	))}
	</div>
)
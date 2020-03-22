import React from 'react';
import './mainMenuNavigation.css';

export default props => (
	<div className="main-menu-navigation">
		{props.menu.map((key, index)=> (
        	<div key={index} className="main-menu-entity">
				<img src={require('./img/'+key+'.png')} alt={key} title={key} />
				<div style={{marginLeft: '20px'}}>{key}</div>
			</div>
    	))}
	</div>
)
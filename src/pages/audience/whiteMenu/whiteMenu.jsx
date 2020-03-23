import React from 'react';
import './whiteMenu.css';
import rows from './rows.js';

export default props => {

    let name = props.status.menu;

    if(!props.status.menu || !rows[props.status.menu]) return null;
    return(
        <div className={name === 'input' || name === 'Everyone' ? 'white-menu white-menu-list' : 'white-menu'}
            style={props.status.style}
        >
            {rows[name].map((key, index) => (
                <div onClick={props.clickWhiteMenu} key={index} className="white-menu-row">{key}</div>
            ))}
        </div>
    )
}
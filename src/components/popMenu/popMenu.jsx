import React from 'react';
import './popMenu.css';

const rows = ['View', 'Duplicate', 'Delete'];

export default props => {
    return(
        <div className="pop-menu" style={props.popMenu}>
            {rows.map((key, index) => (
                <div key={index} onClick={props.clickPopMenu}>{key}</div>
            ))}
        </div>
    )
}
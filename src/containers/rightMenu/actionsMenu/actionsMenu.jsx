import React from 'react';
import './actionsMenu.css';

export default props => (
    <div className="actions-menu">
        {props.rows.map((key, index) => (
            <div key={index} className="actions-menu-row">
                <div className="actions-menu-img" onClick={props.rightRowClick.bind(this, key)}>
                    <img src={require('./img/'+key+'.png')} alt={key} />
                </div>
                <div className="actions-menu-label" onClick={props.rightRowClick.bind(this, key)}>{key}</div>
            </div>
        ))}
    </div>
)
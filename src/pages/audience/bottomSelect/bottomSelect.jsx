import React from 'react';
import './bottomSelect.css';
import plus from './img/plus.png';

const rows = ['Oysters', 'VIP', 'Super Responsive'];

export default props => (
    <div className="bottom-select" style={props.style}>
        {rows.map((key, index) => (
            <div key={index} className="bottom-select-row">
                <span
                    style={{borderRadius: '10px', color: 'rgb(0, 146, 195)', padding: '7px', backgroundColor: '#ffffff'}}
                >{key}</span>
                <span style={{color: '#4a6278'}}>{index*17}</span>
            </div>
        ))}
        <div className="bottom-select-plus">
            <img src={plus} alt="plus" />
        </div>
    </div>
)
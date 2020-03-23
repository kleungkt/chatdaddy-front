import React from 'react';
import './mainMenuOptions.css';

const opt = ['in', 'settings', 'exit']

export default props => (
    <div className="main-menu-options">
        {opt.map((key, index) => (
            <img key={index} src={require('./img/'+key+'.png')} alt={key} />
        ))}
    </div>
)
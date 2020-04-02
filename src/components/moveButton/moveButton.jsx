import React from 'react';
import './moveButton.css';

export default props => (
    <div className={props.move ? 'audience-header-move' : 'audience-header-move audience-move'} 
        onClick={props.moveClick}
    >
        <div className={props.move ? 'audience-header-round' : 'audience-header-round audience-header-round-right'}></div>
        {props.move ? 'Individual' : 'Group'}
    </div>
)
import React from 'react';
import './bottomMenu.css';
import cross from './img/cross.png';
import del from './img/del.png';

const rows = ['Add to segment', 'Remove from Segment', 'Add Tag', 'Remove Tag'];

export default props => (
    <div className={props.bottomMenu ? 'bottom-menu bottom-menu-open' : 'bottom-menu'}>
        <div className="bottom-menu-left">
            <img src={cross} alt="cross"
                style={{marginRight: '55px', cursor: 'pointer'}}
                onClick={props.closeBottomMenu}
            />
            <div>{props.length} contacts selected</div>
        </div>
        <div className="bottom-menu-right">
            {rows.map((key, index) => (
                <div className="bottom-menu-right-entity" key={index}>{key}</div>
            ))}
            <div className="bottom-menu-right-entity">
                <img src={del} alt="del" />
            </div>
        </div>
    </div>
)
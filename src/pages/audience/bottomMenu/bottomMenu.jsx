import React from 'react';
import './bottomMenu.css';
import cross from './img/cross.png';
import del from './img/del.png';
import userLogo from '../../../components/table/img/user.png';
import arrow from '../../../components/table/img/arrow.png';

const rows = ['Add to segment', 'Remove from Segment', 'Add Tag', 'Remove Tag'];

export default props => (
    <div className={props.bottomMenu ? 'bottom-menu bottom-menu-open' : 'bottom-menu'}>
        <div className="bottom-menu-left">
            <img src={cross} alt="cross"
                style={{marginRight: '55px', cursor: 'pointer'}}
                onClick={props.closeBottomMenu}
            />
            {props.user ? 
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img style={{marginRight: '15px'}} src={userLogo} alt="user" />
                    {props.user}
                </div>
            :   <div>{props.length} contacts selected</div>}   
        </div>
        <div className="bottom-menu-right">
            {props.user ?
                <div style={{display: 'flex'}}>
                    <div className="bottom-menu-right-entity bottom-menu-select"
                        onClick={props.bottomSelect}
                    >
                        <span>Select</span>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className="bottom-menu-right-entity">Add Tag</div>
                </div>
            : rows.map((key, index) => (
                <div className="bottom-menu-right-entity" key={index}>{key}</div>
            ))}
            <div className="bottom-menu-right-entity">
                <img src={del} alt="del" />
            </div>
        </div>
    </div>
)
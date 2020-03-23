import React from 'react';
import './whiteMenu.css';
import rows from './rows.js';
import userLogo from '../../../components/table/img/user.png';
import cross from './img/cross.png';

export default props => {

    let name = props.status.menu;

    if(!props.status.menu || !rows[props.status.menu]) return null;
    return(
        <div className={name === 'input' || name === 'Everyone' ? 'white-menu white-menu-list' : 'white-menu'}
            style={props.status.style}
        >
            {name === 'input' ?
                <div>
                    <div className="menu-input-top">
                        {rows[name].map((key, index) => (
                            <div key={index} className="tag-row">{key}</div>
                        ))}
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img style={{marginRight: '15px'}} src={userLogo} alt="user" />
                        <div className="menu-user-wrap">
                            <span style={{fontSize: '20px', fontWeight: 700}}>Kenny Lim</span>
                            <span style={{color: 'rgb(0, 146, 195)'}}>+853 156132165</span>
                        </div>
                    </div>
                </div>
            : name === 'Everyone' ?
                <div>
                    {rows[name].map((key, index) => (
                        <div key={index} className="everyone-wrap">
                            <div style={{cursor: 'pointer'}} onClick={props.clickWhiteMenu}>
                                <div className="everyone-title">{key}</div>
                                <div className="everyone-desc">{key === 'Oyster Gand' ? 'Tagget With "Oysters" warm score...' : 'Message History Contains "hahaha"'}</div>
                            </div>
                            <img className="everyone-cross" src={cross} alt="cross" />
                        </div>
                    ))}
                    <div className="everyone-new">Add New Segment</div>
                </div>
            : rows[name].map((key, index) => (
                <div onClick={props.clickWhiteMenu} key={index} className="white-menu-row">{key}</div>
            ))}
        </div>
    )
}
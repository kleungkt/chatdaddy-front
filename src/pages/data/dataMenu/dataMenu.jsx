import React from 'react';
import './dataMenu.css'

const sections = ['Overview', 'Dashboard'];

export default props => (
    <div className="data-menu-wrap">
        <div className="data-menu">
            {sections.map((key, index) => (
                <div key={index} 
                    className={props.section === index ? 'data-menu-entity data-menu-entity-active' : 'data-menu-entity'}
                    style={{marginRight: index === 0 ? '40px' : 0}}
                >
                    <span style={{cursor: 'pointer'}} onClick={props.clickMenu.bind(this, index)}>{key}</span>
                    <div style={{visibility: props.section === index ? 'visible' : 'hidden'}} className="data-menu-round"></div>
                </div>
            ))}
        </div>
    </div>
)
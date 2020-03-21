import React from 'react';
import './broadcastHeader.css';

const status = ['Draft', 'Scheduled', 'Completed'];

export default props => (
    <div className="broadcast-header">
        <div className="broadcast-header-button">New Campaign</div>
        <div className="broadcast-header-status">
            {status.map((key, index) => (
                <div key={index}
                    className={props.status === index ? 'status-row status-row-active' : 'status-row'}
                    onClick={props.statusClick.bind(this, index)}
                >
                    {key}
                </div>
            ))}
        </div>
    </div>
)
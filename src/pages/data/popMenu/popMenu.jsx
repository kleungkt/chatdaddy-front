import React from 'react';
import './popMenu.css';

const menu = {
    days: ['Last 7 Days', 'Last 4 Weeks', 'Last 3 Months', 'Last 12 Months', 'Month to date', 'Quarter to date', 'Year to date', 'All time'],
    period: ['Previous period', 'Previous month', 'Previous quarter', 'Previous year', 'Previous year']
};

export default props => {
    return(
        <div className="data-pop-menu" style={props.popMenu.style}>
            {menu[props.popMenu.section].map((key, index) => (
                <div key={index} onClick={props.clickPopMenu}>{key}</div>
            ))}
        </div>
    )
}
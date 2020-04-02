import React from 'react';
import './dashboard.css';
import arrow from './img/arrow.png';
import {LineChart} from '../../../components/chart/chart';

const bars = ['Hot', 'Warm', 'Cold'];

export default props => (
    <div className="dashboard">
        <div className="dashboard-title">Dashboard</div>
        <div className="dashboard-menu-wrap">
            <div className="dashboard-menu">
                <div className="dashboard-select" onClick={props.getPopMenu.bind(this, 'days')}>
                    <span>Last 7 days</span>
                    <img src={arrow} alt="arrow" />
                </div>
                <div className="dashboard-menu-center">compared to</div>
                <div className="dashboard-select" onClick={props.getPopMenu.bind(this, 'period')}>
                    <span>No comparison</span>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
            <div className="dashboard-dl">Export Report</div>
        </div>
        <div className="dashboard-chart-wrap">
            {props.arr.info.map((key, index) => (
                <div key={index} className="dashboard-chart" onClick={props.chartClick.bind(this, index)}>
                    <div className="dashboard-chart-label">{key.label}</div>
                    {key.view ? <div className="dashboard-chart-total">{key.total}</div> : null}
                    {key.view ?
                        <LineChart data={props.arr.data[index]} />
                    : 
                        <div style={{marginTop: '20px'}}>
                            {bars.map((key, index) => (
                                <div key={index} className="dashboard-chart-bars">
                                    <span>{key}</span> 
                                    <div style={{width: Math.floor(Math.random() * 60)+'%'}}></div>
                                </div>
                            ))}
                            
                        </div>
                    }
                    <div className="dashboard-chart-bottom">
                        <span>Mar 30</span>
                        <span>Today</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
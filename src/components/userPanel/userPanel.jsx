import React from 'react';
import './userPanel.css';
import userImg from '../../user.png';
import plus from './img/plus.png';
import plus1 from './img/plus1.png';
import arrowLeft from './img/arrowLeft.png';
import arrowRight from './img/arrowRight.png';
import group from '../table/img/user.png';

const status = ['Oysters', 'VIP', 'Super Responsive', 'PrimarySchoolMate'];
const info = ['Warm Score', 'Message Sent', 'Message Received'];
const info1 = {
    'Contact Name': 'Kenny Lim', 'Last Seen': '10:20', 
    'Warm Score': 'Cold', 'Message Sent': 1312, 
    'Message Received': 555
};

const users = () => {
    let arr = [];
    for(let i = 0; i < 12; i ++) arr.push(i);
    return arr;
}

export default props => {

    return(
        <div style={props.style} className="audience-right-menu">
            <img src={userImg} alt="user" className="audience-user-menu" 
                onClick={props.groupClick}
            />
            <div className="audience-menu-user-name">Kenny Lim</div>
            <div className="audience-menu-user-status audience-status-row">
                {status.map((key, index) => (
                    <div key={index} 
                        className={props.group ? 'tag-row tag-row-status': 'tag-row tag-row-status groups-status'}>
                            {key}
                        </div>
                ))}
                <img style={{height: '30px', cursor: 'pointer'}} src={props.group ? plus : plus1} alt="plus" />
            </div>
            <div className="menu-profile-information">Profile Information</div>
            <div style={{display: props.group ? 'flex' : 'none'}} className="menu-group-wrap">
                <div style={{color: '#90aabf', fontSize: '14px'}}>Group Members</div>
                <div className="menu-user-container">
                    {users().map((key, index) => (
                        <div key={index} className="menu-user-item">
                            <img src={group} alt="user" />
                            <div>Kenny Lim</div>
                        </div>
                    ))}
                </div>
                <div className="menu-group-arrows">
                    <img src={arrowLeft} alt="arrow" />
                    <img src={arrowRight} alt="arrow" />
                </div>
            </div>
            <div className="user-menu-info">
                {props.group ?
                    info.map((key, index) => (
                        <div key={index} className="user-menu-info-row">
                            <span style={{color: '#90aabf'}}>{key+':'}</span>
                            <span style={{color: '#3b546b'}}>{Math.floor(Math.random() * 1235)}</span>
                        </div>  
                    ))
                : Object.keys(info1).map((key, index) => (
                    <div key={index} className="user-menu-info-row">
                        <span style={{color: '#90aabf'}}>{key+':'}</span>
                        <span style={{color: '#3b546b'}}>{info1[key]}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
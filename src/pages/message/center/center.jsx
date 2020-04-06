import React from 'react';
import './center.css';
import lupe from '../img/lupe.png';
import {data, oneMessage, dateMessage} from './rows/rows';

const but = ['smile', 'dl', 'mic']

export default props => {
    return(
        <div className="message-center">
            <div className="message-center-title">
                <span>Dialogue with Kenny Lim</span>
                <img src={lupe} alt="lupe" />
            </div>
            <div className="messages-wrap">
                {dateMessage('Dec 31 2019: 10:00', 'Kenny Lim')}
                {data.map((key, index) => (
                    oneMessage(key[1], index, props.getWhiteMenu)
                ))}
            </div>
            <div className="message-center-textarea-wrap">
                <textarea style={{backgroundColor: props.textarea[0]}} placeholder={props.textarea[1]} className="message-textarea message-center-textarea"></textarea>
                <div onClick={props.areaClick.bind(this, 'Send Now')} style={{backgroundColor: '#0092c3', left: '80px'}} className="textarea-section">Send Now</div>
                <div onClick={props.areaClick.bind(this, 'Shedule')} style={{backgroundColor: '#304c64', left: '170px'}} className="textarea-section">Shedule</div>
                <div onClick={props.areaClick.bind(this, 'Insert Note')} style={{backgroundColor: '#8ea8bd', left: '260px'}} className="textarea-section">Insert Note</div>
                <div onClick={props.getWhiteMenu.bind(this, 'send')} className="textarea-but">
                    {but.map((key, index) => (
                        <img style={{cursor: 'pointer'}} key={index} src={require('./img/'+key+'.png')} alt={key} />
                    ))}
                </div>
                <div onClick={props.getWhiteMenu.bind(this, 'time')} className="textarea-time">Select time</div>
            </div>
        </div>
    )
}
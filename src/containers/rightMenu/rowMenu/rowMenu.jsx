import React from 'react';
import './rowMenu.css';
import points from './img/points.png';
import del from './img/del.png';
import add from './img/add.png';

export default props => (
    <div className="message-block">
        <img style={{visibility: props.status.content === 'Message' ? 'visible' : 'hidden'}} src={points} alt="points" />
        {props.status.content === 'Message' ? 
            <textarea className="message-textarea"></textarea>
        : props.status.content === 'Contact' ? 
            <div className="right-search">
                <div style={{fontSize: '20px', color: '#0094c5', fontWeight: 700}}>Search contact</div>
                <input placeholder="Name or phone number" />
            </div>
        : props.status.content === 'Image' ?
            <div style={{height: '80px'}} className="right-search">
                <div style={{fontSize: '20px', color: '#0094c5', fontWeight: 700}}>Uload frm compuer</div>
            </div>
        : props.status.content === 'Audio' ?
            <div style={{height: '80px'}} className="right-search">
                <div style={{fontSize: '20px', color: '#0094c5', fontWeight: 700}}>Start Recording</div>
            </div>
        : null}
        <div className="message-icons-block">
            <img src={add} alt="add" />
            <img style={{marginTop: '-15px'}} src={del} alt="del" />
        </div>
    </div>
)
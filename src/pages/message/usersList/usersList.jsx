import React from 'react';
import './usersList.css';

import user1 from '../../../user.png';
import user2 from '../img/1.jpg';
import sc from '../img/sc.png';


export default props => (
    
    <React.Fragment>
        {props.users.map((key, index) => (
            <div key={index} className="message-user">
                {index % 5 === 0 ? <img onClick={props.getWhiteMenu.bind(this, 'chat')} className="message-user-arrow" src={require('../img/arrow.png')} alt="arrow" /> : null}
                <img className="message-user-ava" src={key === 'Kenny Lim' ? user1 : user2} alt="user" />
                <div style={{color: '#374E65', flexGrow: 1}}>
                    <div style={{fontSize: '18px', fontWeight: 700}}>
                        <span>{key}</span>
                        {index === 1 || index % 5 === 0 ?
                            <img style={{width: '15px', height: '15px', marginLeft: '5px'}} src={sc} alt="sc" />
                        : null}
                    </div>
                    <div style={{fontSize: '16px', opacity: 0.2}}>{index % 3 === 0 ? 'Judy Lee: What time?' 
                    : index % 5 === 0 ? 'Voice Message'
                    : 'What are you up to?'}</div>
                </div>
                <div style={{fontSize: '16px', opacity: 0.3}}>
                    {'0'+Math.floor(Math.random() * 5)+':'+(Math.floor(Math.random() * 45)+10)}
                </div>
                <div className="user-online"
                    style={{display: (index % 3 === 0 || index % 7 === 0) && !props.arch ? 'block' : 'none'}}
                ></div>
            </div>
        ))}
    </React.Fragment>
)

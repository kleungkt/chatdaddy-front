import React from 'react';
import './center.css';
import lupe from '../img/lupe.png';

export default props => {
    return(
        <div className="message-center">
            <div className="message-center-title">
                <span>Dialogue with Kenny Lim</span>
                <img src={lupe} alt="lupe" />
            </div>
        </div>
    )
}
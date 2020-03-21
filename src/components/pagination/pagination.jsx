import React from 'react';
import './pagination.css';
import points from './img/points.png';

export default props => (
    <div className="pagination">
        <div className="pagin-page pagin-page-active">1</div>
        <div className="pagin-page">2</div>
        <div className="pagin-page">3</div>
        <div className="pagin-points">
            <img src={points} alt="points" />
        </div>
        <div className="pagin-page">10</div>
    </div>
)
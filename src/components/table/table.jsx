import React from 'react';
import './table.css';
import {thead, tbody} from '../../const/const.js';
import points from './img/points.png'

export default props => {

	const getTr = (row, index) => {
		return(
			<div key={index} className="broadcast-row">
				<div style={{fontWeight: 700, width: '350px'}}>{row[0]}</div>
				<div style={{width: '350px'}}>{row[1]}</div>
				<div style={{width: '300px'}}>{row[2]}</div>
				<div style={{width: '140px', textAlign: 'center'}}>{getDif(row[3])}</div>
				<div style={{width: '140px', textAlign: 'center'}}>{getDif(row[4])}</div>
				<div style={{width: '140px', textAlign: 'center'}}>{getDif(row[5])}</div>
				<div style={{textAlign: 'center', width: '140px'}}>
					<img src={points} alt="points" 
						style={{transform: 'rotate(90deg)', height: '23px', cursor: 'pointer'}}
						onClick={props.getPopMenu}
					/>
				</div>
			</div>
		)
	}

	const getDif = arr => {
		const pers = parseInt(arr[0] / arr[1] * 100) + '%';
		return(
			<span className="total">
				<span style={{color: '#0085b2', fontSize: '22px'}}>{pers}</span>
				<span style={{paddingTop: '10px', color: '#90aabf'}}>{arr[0]+'/'+arr[1]}</span>
			</span>
		)
	}

	return (
		<div className="broadcast-table">
			<div className="broadcast-head">
				{Object.keys(thead[props.status]).map((key, index) => (
					<div  key={index} className="head-entity"
						style={{width: thead[props.status][key]+'px', textAlign: index > 2 ? 'center' : 'left'}}
					>
						{key}
					</div>
				))}
			</div>
			<div className="broadcast-body">
				{tbody(props.status).map((key, index) => (getTr(key, index)))}
			</div>
		</div>
	)
   
}
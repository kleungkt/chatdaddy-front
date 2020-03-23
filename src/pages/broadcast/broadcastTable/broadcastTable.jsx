import React from 'react';
import './broadcastTable.css';
import Table from '../../../components/table/table';
import points from '../../../components/table/img/points.png';
import {thead, tbody} from '../../../const/broadcast';

export default props => {
   
	const getDif = arr => {
		const pers = parseInt(arr[0] / arr[1] * 100) + '%';
		return(
			<span className="total">
				<span style={{color: '#0085b2', fontSize: '22px'}}>{pers}</span>
				<span style={{paddingTop: '10px', color: '#90aabf'}}>{arr[0]+'/'+arr[1]}</span>
			</span>
		)
    }
    
    const head = () => (thead[props.status]);

    const body = () => (
        <div className="main-body">
            {tbody(props.status).map((row, index) => (
                <div key={index} className="main-row">
                    <div style={{fontWeight: 700, width: '350px'}} className="main-row-div">{row[0]}</div>
                    <div style={{width: '350px'}} className="main-row-div">{row[1]}</div>
                    <div style={{width: '300px'}} className="main-row-div">{row[2]}</div>
                    <div style={{width: '140px', textAlign: 'center'}} className="main-row-div">{getDif(row[3])}</div>
                    <div style={{width: '140px', textAlign: 'center'}} className="main-row-div">{getDif(row[4])}</div>
                    <div style={{width: '140px', textAlign: 'center'}} className="main-row-div">{getDif(row[5])}</div>
                    <div style={{textAlign: 'center', width: '140px'}} className="main-row-div">
                        <img src={points} alt="points" 
                            style={{cursor: 'pointer'}}
                            onClick={props.getPopMenu}
                        />
                    </div>
                </div>
            ))}
        </div>
    )

    return(
        <Table thead={head()} tbody={body()} />
    )
}
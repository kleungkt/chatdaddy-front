import React from 'react';
import './audienceTable.css';
import Table from '../../../components/table/table';
import {thead, tbody} from '../../../const/audience';

import user from '../../../components/table/img/user.png';
import check from '../../../components/table/img/check.png';


const icons = ['message', 'action', 'del', 'points'];


export default props => {

    const body = () => (
        <div className="main-body">
            {tbody(props.status).map((row, index) => (
                <div key={index} className="main-row">
                    <div style={{width: '80px'}} className="main-row-div"
                        onClick={props.check.bind(this, index)}
                    >
                        <div style={{padding: 0}} className="table-checkbox">
                            <img src={check} alt="check" 
                                style={{visibility: props.checked[index] ? 'visible': 'hidden'}}
                            />
                        </div>
                    </div>
                    <div style={{width: '270px'}} className="main-row-div main-row-div-user">
                        <img style={{marginRight: '15px'}} src={user} alt="user" />
                        <span>
                            <span style={{fontWeight: 700}}>{row[0][0]}</span><br />
                            <span style={{fontSize: '12px', color: '#0092c3'}}>{row[0][1]}</span>
                        </span>
                    </div>
                    <div style={{width: '180px'}} className="main-row-div">{row[1]}</div>
                    <div style={{width: '230px'}} className="main-row-div main-row-div-tag">
                        {row[2].map((key, index) => (
                            <div key={index} className="tag-row">
                                {key}
                            </div>
                        ))}
                    </div>
                    <div style={{width: '200px', textAlign: 'center'}} className="main-row-div">{row[3]}</div>
                    <div style={{width: '200px', textAlign: 'center'}} className="main-row-div">{row[4]}</div>
                    <div style={{width: '240px', textAlign: 'center'}} className="main-row-div">{row[5]}</div>
                    <div className="main-row-div main-row-div-icons">
                        {icons.map((key, index) => (
                            <img key={index}
                                src={require('../../../components/table/img/'+key+'.png')} alt="points" 
                                style={{cursor: 'pointer'}}
                                onClick={props.getWhiteMenu.bind(this, key)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )

    return(
        <Table thead={thead} tbody={body()} 
            checkbox={true} 
            check={props.check} 
            checked={props.checked}
        />
    )
}
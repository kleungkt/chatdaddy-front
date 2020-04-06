import React from 'react';
import './modals.css';
import Rodal from 'rodal';
import {content} from './content';
import cross from './img/cross.png';

export default props => {

    const c = content.get(props.modal);
    const visible = c ? true : false;

    return(
        <Rodal visible={visible} onClose={() => {}}
            width={c ? c.size[0] : 300} height={c ? c.size[1] : 300}
        >
            <div className="modal-audience-top">
                <div>{props.modal === 'Add New Segment-mess' ? 'Add New Segment' : props.modal}</div>
                <img style={{cursor: 'pointer'}} src={cross} alt="cross" onClick={props.close} />
            </div>
            {c ? c.content : null}
            <div className="modal-audience-button" onClick={props.close}>{c? c.button : ''}</div>
        </Rodal>
    )
}

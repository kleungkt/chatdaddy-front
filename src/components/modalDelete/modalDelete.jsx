import React from 'react';
import './modalDelete.css';

import Rodal from 'rodal';
import './rodal.css';

export default props => (
    <Rodal visible={props.modal} onClose={() => {}}
        width={380} height={190} duration={400}
    >
        <div className="modal-title">{props.title}</div>
        <div className="modal-buttons">
            <div onClick={props.clickModal}>Confirm</div>
            <div onClick={props.clickModal}>Cansel</div>
        </div>
    </Rodal>
)
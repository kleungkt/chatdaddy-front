import React from 'react';
import './table.css';
import arrow from './img/arrow.png';

const filter = ['Name / Whatsapp', 'Last Seen', 'Warm Score', 'Message Sent', 'Message Received', '']

export default props => (
	<div className="main-table">
		<div className="main-head">
			{props.checkbox ? 
				<div style={{width: '80px'}} className="head-entity">
					<div className="table-checkbox"></div>
				</div>
			: null}
			{Object.keys(props.thead).map((key, index) => (
				<div  key={index} className="head-entity"
					style={{width: props.thead[key]+'px', textAlign: index > 2 ? 'center' : 'left'}}
				>
					{key}
					{filter.indexOf(key) !== -1 ?
						<img style={{marginLeft: '20px'}} src={arrow} alt="arrow" />
					: null}
				</div>
			))}
		</div>
		{props.tbody}
	</div>
)
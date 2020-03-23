import React from 'react';
import './audience.css';

// import PopMenu from '../../components/popMenu/popMenu';
// import Modal from '../../components/modal/modal';

import AudienceHeader from './audienceHeader/audienceHeader';
import AudienceTable from './audienceTable/audienceTable';
import Pagination from '../../components/pagination/pagination';


export default class Audience extends React.Component {
	
	render() {
		return(
			<div className="audience">
				<div className="audience-label">Audience</div>
				<AudienceHeader />
				<AudienceTable />
				<Pagination />
			</div>
		)
	}
}
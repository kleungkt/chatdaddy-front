import React from 'react';
import './audience.css';

// import PopMenu from '../../components/popMenu/popMenu';
// import Modal from '../../components/modal/modal';

import AudienceHeader from './audienceHeader/audienceHeader';
import AudienceTable from './audienceTable/audienceTable';
import BottomMenu from './bottomMenu/bottomMenu';

import Pagination from '../../components/pagination/pagination';


export default class Audience extends React.Component {

	state = {
		checked: {},
		bottomMenu: false,
		move: true
	}

	check = index => {
		let checked = {...this.state.checked};
		if(index === 'all') {
			if(checked.all) checked = {};
			else {
				const ch = document.getElementsByClassName('table-checkbox');
				for(let i = 0; i < ch.length; i ++) checked[i] = true;
				checked.all = true;
			}
		}
		else {
			if(checked[index]) {
				delete(checked[index]);
				if(checked.all) delete(checked.all);
			}
			else checked[index] = true;
		}
		const bottomMenu = Object.keys(checked).length ? true : false;
		this.setState({checked, bottomMenu});
	}

	closeBottomMenu = () => this.setState({bottomMenu: false});

	moveClick = e => {
		this.state.move ? this.setState({move: false}) : this.setState({move: true});
	}
	
	render() {
		return(
			<div className="audience">
				<div className="audience-label">Audience</div>
				<AudienceHeader moveClick={this.moveClick} 
					move={this.state.move}
				/>
				<AudienceTable check={this.check} checked={this.state.checked} />
				<Pagination />
				<BottomMenu length={Object.keys(this.state.checked).length} 
					bottomMenu={this.state.bottomMenu}
					closeBottomMenu={this.closeBottomMenu}
				/>
			</div>
		)
	}
}
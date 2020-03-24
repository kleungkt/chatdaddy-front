import React from 'react';
import './audience.css';
import Pagination from '../../components/pagination/pagination';
import ModalDelete from '../../components/modalDelete/modalDelete';
import AudienceHeader from './audienceHeader/audienceHeader';
import AudienceTable from './audienceTable/audienceTable';
import BottomMenu from './bottomMenu/bottomMenu';
import BottomSelect from './bottomSelect/bottomSelect';
import WhiteMenu from './whiteMenu/whiteMenu';
import ModalAudience from './modalAudience/modalAudience';
import AudienceRightMenu from './audienceRightMenu/audienceRightMenu';

export default class Audience extends React.Component {

	state = {
		rightMenu: false,
		group: true,
		title: 'Audience',
		modalDelete: false,
		checked: {},
		bottomMenu: false,
		move: true,
		user: '',
		bottomSelect: {
			display: 'none'
		},
		whiteMenu: {
			style: {
				display: 'none'
			},
			menu: ''
		},
		modal: ''
	}

	check = index => {
		let checked = {...this.state.checked};
		const ch = document.getElementsByClassName('table-checkbox');
		if(index === 'all') {
			if(checked.all) checked = {};
			else {
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
		const user = Object.keys(checked).length === 1 ? ch[index+1].parentNode.parentNode.children[1].innerText.split('+')[0] : false;
		this.setState({checked, bottomMenu, user});
	}

	closeBottomMenu = () => this.setState({bottomMenu: false});

	moveClick = e => {
		this.state.move ? this.setState({move: false, title: 'Groups'}) : this.setState({move: true, title: 'Audience'});
	}

	bottomSelect = e => {
		const c = e.currentTarget.getBoundingClientRect();
		let bottomSelect = {...this.state.bottomSelect}
		if(bottomSelect.display === 'none') {
			bottomSelect = {
				display: 'flex',
				left: c.x,
				top: c.y - 200
			}
		}
		else bottomSelect.display = 'none';
		this.setState({bottomSelect});
	}

	getWhiteMenu = (name, e) => {
		if(name === 'input' && !e.currentTarget.value) {
			this.closeWhiteMenu(); return;
		}
		console.log(name)
		switch(name) {
			case 'Add contact' :
			case 'Search Message History' :
			case 'Add New Segment' :
				this.closeWhiteMenu();
				this.setState({modal: name});
			break;
			case 'del' :
				this.setState({modalDelete: true});
			break;
			default : 
				const c = e.currentTarget.getBoundingClientRect();
				let whiteMenu = {
					menu: name,
					style: {
						width: name === 'input' || name === 'Everyone' ? c.width : 'auto',
						left: name === 'points' ? c.x - 200 : c.x,
						top: name === 'points' ? c.y - 100 + window.pageYOffset : c.y + c.height + window.pageYOffset,
					}
				};
				this.setState({whiteMenu});
		}
		
	}

	closeWhiteMenu = e => {
		let whiteMenu = {menu: false};
		this.setState({whiteMenu});
	}

	clickWhiteMenu = e => {
		this.closeWhiteMenu();
	}

	closeModalDelete = e => this.setState({modalDelete: false});
	closeModal = e => this.setState({modal: false});

	tableRowClick = e => {
		this.state.rightMenu ? this.setState({rightMenu: false}) : this.setState({rightMenu: true});
	}

	groupClick = e => this.state.group ? this.setState({group: false}) : this.setState({group: true});

	render() {
		return(
			<div className="audience">
				<AudienceRightMenu open={this.state.rightMenu} 
					group={this.state.group}
					groupClick={this.groupClick}
				/>
				<ModalAudience modal={this.state.modal} close={this.closeModal} />
				<ModalDelete 
					modal={this.state.modalDelete}
                    clickModal={this.closeModalDelete}
                    title="Delete Contact"
				/>
				<WhiteMenu status={this.state.whiteMenu}
					clickWhiteMenu={this.clickWhiteMenu}
					getWhiteMenu={this.getWhiteMenu}
				/>
				<BottomSelect style={this.state.bottomSelect} />
				<div className="audience-label">{this.state.title}</div>
				<AudienceHeader moveClick={this.moveClick} 
					move={this.state.move}
					getWhiteMenu={this.getWhiteMenu}
				/>
				<AudienceTable 
					check={this.check} 
					getWhiteMenu={this.getWhiteMenu} 
					checked={this.state.checked}
					tableRowClick={this.tableRowClick}
				/>
				<Pagination />
				<BottomMenu length={Object.keys(this.state.checked).length} 
					bottomMenu={this.state.bottomMenu}
					closeBottomMenu={this.closeBottomMenu}
					user={this.state.user}
					bottomSelect={this.bottomSelect}
				/>
			</div>
		)
	}
}
import React from 'react';
import './data.css';
import DataMenu from './dataMenu/dataMenu';
import PopMenu from './popMenu/popMenu';
import Overview from './overview/overview';
import Dashboard from './dashboard/dashboard';
import {lineData} from '../../const/data';

export default class Data extends React.Component {

	state = {
		section: 0,
		popMenu: {
			style: {display: 'none'},
			section: 'days'
		},
		arr: []
	}

	componentDidMount() {
		this.setState({arr: lineData()});
	}

	clickMenu = index => this.setState({section: index});

	clickPopMenu = e => {
		const popMenu = {
			style: {display: 'none'},
			section: 'days'
		}
		this.setState({popMenu});
	};

	getPopMenu = (section, e) => {
		const c = e.currentTarget.getBoundingClientRect();
		const popMenu = {
			section,
			style: {
				display: this.state.popMenu.style.display === 'block' ? 'none' : 'block',
				left: c.x,
				top: c.y+c.height+window.pageYOffset
			}
		}
		this.setState({popMenu});
	}

	chartClick = index => {
		const arr = {...this.state.arr};
		arr.info[index].view = arr.info[index].view ? false : true;
		this.setState({arr});
	}

	render() {
		return(
			<div className="data">
				<DataMenu section={this.state.section} clickMenu={this.clickMenu} />
				<PopMenu popMenu={this.state.popMenu} clickPopMenu={this.clickPopMenu} />
				<div className="data-page-wrap">
					<div className="data-page">
						{this.state.section === 0 ? 
							<Overview />
						: <Dashboard 
							getPopMenu={this.getPopMenu} 
							arr={this.state.arr} 
							chartClick={this.chartClick}
						/>}
					</div>
				</div>
			</div>
		)
	}
}
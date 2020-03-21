import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import MainMenu from './containers/mainMenu/mainMenu';
import userPhoto from './user.png';

import Broadcast from './pages/broadcast/broadcast';

export default class App extends React.Component {

	state = {
		user: {}
	}

	componentDidMount() {
		this.setState({
			user: {
				name: 'Kenny Lim',
				status: 'Chat Daddy Limited',
				photo: userPhoto
			}
		});
	}
	
	render() {
		return (
			<div className="App">
				<MainMenu user={this.state.user} />
				<Switch>
					<Route path="/" exact component={Broadcast} />
				</Switch>
			</div>
		);
	}
	
}
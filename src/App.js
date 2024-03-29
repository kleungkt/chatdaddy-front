import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import MainMenu from './containers/mainMenu/mainMenu';
import userPhoto from './user.png';

import Broadcast from './pages/broadcast/broadcast';
import Audience from './pages/audience/audience';
import Data from './pages/data/data';
import Message from './pages/message/message';

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
					<Route path="/audience" component={Audience} />
					<Route path="/automation" component={Broadcast} />
					<Route path="/data" component={Data} />
					<Route path="/message" component={Message} />
				</Switch>
			</div>
		);
	}
	
}
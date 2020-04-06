import React from 'react';
import './message.css';
import MoveButton from '../../components/moveButton/moveButton';
import UserPanel from '../../components/userPanel/userPanel';
import points from '../../components/table/img/points.png';
import arrow from '../../components/table/img/arrow.png';



import Center from './center/center';

import UsersList from './usersList/usersList';
import Modals from '../../containers/modals/modals';
import WhiteMenu from './whiteMenu/whiteMenu';

const style = {
    display: 'block',
    position: 'static',
    boxShadow: 'none',
    background: '#ecf8f7',
    borderRadius: '15px',
    textarea: 'send',
    arhive: false
}
export default class Message extends React.Component {

    state = {
        group: true,
        move: true,
        users: [],
        whiteMenu: '',
        modal: '',
        textarea: ['#ffffff', 'Click Enter to confirm.'],
        archived: false
    }

    componentDidMount() {
        const users = [];
        for(let i = 0; i < 100; i ++) {
            users.push((i % 2) === 0 ? 'Kenny Lim' : 'Annie Tang');
        }
        this.setState({users})
    }

    groupClick = e => this.state.group ? this.setState({group: false}) : this.setState({group: true});

    moveClick = e => {
		this.state.move ? this.setState({move: false, title: 'Groups'}) : this.setState({move: true, title: 'Audience'});
    }

    getWhiteMenu = (name, e) => {
		if(name === 'input' && !e.currentTarget.value) {
			this.closeWhiteMenu(); return;
        }
        const c = name === 'message' ? e.currentTarget.parentNode.getBoundingClientRect() : e.currentTarget.getBoundingClientRect();
        const whiteMenu = { menu: name, c};
        this.setState({whiteMenu});
	}

	closeWhiteMenu = e => {
		let whiteMenu = {menu: false};
		this.setState({whiteMenu});
	}

	clickWhiteMenu = e => {
        console.log(e.target.innerText)
        switch(e.target.innerText) {
            case 'Archived' :
                this.setState({archived: true})
            break;
            case 'Profile' :
                this.setState({archived: false, newGroup: false})
            break;
            case 'New group' :
                this.setState({archived: false, newGroup: true})
            break;
            default : this.closeWhiteMenu();
        }
        this.closeWhiteMenu();
    }
    
    getModal = name => {
        this.closeWhiteMenu();
        this.setState({modal: name});
    }

    closeModal = e => this.setState({modal: false});

    areaClick = section => {
        let textarea = [];
        switch(section) {
            case 'Shedule' :
                textarea = ['#304c64', 'Click Enter to confirm. Annie will not be able to see this note.']
            break;
            case 'Insert Note' :
                textarea = ['#8ea8bd', 'Click Enter to confirm. Annie will not be able to see this note.']
            break;
            default : textarea = ['#ffffff', 'Click Enter to confirm.']
        }
        this.setState({textarea})
    }

    render() {
        return(
            <div className="message-wrap">
                <Modals modal={this.state.modal} close={this.closeModal} />
                <WhiteMenu status={this.state.whiteMenu}
                    clickWhiteMenu={this.clickWhiteMenu}
					getModal={this.getModal}
				/>
                <div className="message">
                    <div className="message-left">
                        <div className="message-left-move">
                            <div style={{fontSize: '24px', fontWeight: 700}}>Chats (1220)</div>
                            <div style={{display: 'flex'}}>
                                <MoveButton move={this.state.move} moveClick={this.moveClick} />
                                <img onClick={this.getWhiteMenu.bind(this, 'profile')} style={{marginLeft: '20px', cursor: 'pointer'}} src={points} alt="points" />
                            </div>
                        </div>
                        <div className="message-left-search">
                            <input onInput={this.getWhiteMenu.bind(this, 'input')} className="message-left-input" type="text" placeholder="Search..." />
                            <div onClick={this.getWhiteMenu.bind(this, 'Everyone')} className="message-left-select">
                                <span>Everyone</span>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </div>
                        <div  className="message-left-container">
                            <UsersList users={this.state.users} getWhiteMenu={this.getWhiteMenu} />
                        </div>
                    </div>
                    <div className="message-center-wrap">
                        <Center textarea={this.state.textarea} getWhiteMenu={this.getWhiteMenu} areaClick={this.areaClick} />
                    </div>
                    {this.state.archived ?
                        <div className="archived">
                            <div className="archived-header">Archived chats</div>
                            <div className="archived-list">
                                <UsersList arch={true} users={this.state.users} getWhiteMenu={this.getWhiteMenu} />
                            </div>
                        </div>
                    : this.state.newGroup ?
                        <div className="archived">
                            <div className="archived-header">New group</div>
                            <div className="new-group">
                                <img className="new-group-user" src={require('../../user.png')} alt="user" />
                                <div className="group-name">Group name</div>
                                <div className="group-input">
                                    <div>molamola</div>
                                    <div className="group-input-right">
                                        <span style={{opacity: 0.5}}>25</span>
                                        <img style={{marginLeft: '20px'}} src={require('./center/img/smile.png')} alt="smile" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    : <UserPanel style={style} group={this.state.group} groupClick={this.groupClick} />}
                </div>
            </div>
        )
    }
}
import React from 'react';
import './message.css';
import MoveButton from '../../components/moveButton/moveButton';
import UserPanel from '../../components/userPanel/userPanel';
import points from '../../components/table/img/points.png';
import arrow from '../../components/table/img/arrow.png';

import user1 from '../../user.png';
import user2 from './img/1.jpg';
import sc from './img/sc.png';

import Center from './center/center';

const style = {
    display: 'block',
    position: 'static',
    boxShadow: 'none',
    background: '#ecf8f7',
    borderRadius: '15px'
}
export default class Message extends React.Component {

    state = {
        group: true,
        move: true,
        users: []
    }

    componentDidMount() {
        const users = [];
        for(let i = 0; i < 300; i ++) {
            users.push((i % 2) === 0 ? 'Kenny Lim' : 'Annie Tang');
        }
        console.log(users)
        this.setState({users})
    }

    groupClick = e => this.state.group ? this.setState({group: false}) : this.setState({group: true});

    moveClick = e => {
		this.state.move ? this.setState({move: false, title: 'Groups'}) : this.setState({move: true, title: 'Audience'});
    }
    
    render() {
        return(
            <div className="message-wrap">
                <div className="message">
                    <div className="message-left">
                        <div className="message-left-move">
                            <div style={{fontSize: '24px', fontWeight: 700}}>Chats (1220)</div>
                            <div style={{display: 'flex'}}>
                                <MoveButton move={this.state.move} moveClick={this.moveClick} />
                                <img style={{marginLeft: '20px', cursor: 'pointer'}} src={points} alt="points" />
                            </div>
                        </div>
                        <div className="message-left-search">
                            <input className="message-left-input" type="text" placeholder="Search..." />
                            <div className="message-left-select">
                                <span>Everyone</span>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </div>
                        <div  className="message-left-container">
                            {this.state.users.map((key, index) => (
                                <div key={index} className="message-user">
                                    <img src={key === 'Kenny Lim' ? user1 : user2} alt="user" />
                                    <div style={{color: '#374E65', flexGrow: 1}}>
                                        <div style={{fontSize: '18px', fontWeight: 700}}>
                                            <span>{key}</span>
                                            {index === 1 || index % 5 === 0 ?
                                                <img style={{width: '15px', height: '15px', marginLeft: '5px'}} src={sc} alt="sc" />
                                            : null}
                                        </div>
                                        <div style={{fontSize: '16px', opacity: 0.2}}>{index % 3 === 0 ? 'Judy Lee: What time?' 
                                        : index % 5 === 0 ? 'Voice Message'
                                        : 'What are you up to?'}</div>
                                    </div>
                                    <div style={{fontSize: '16px', opacity: 0.3}}>
                                        {'0'+Math.floor(Math.random() * 5)+':'+(Math.floor(Math.random() * 45)+10)}
                                    </div>
                                    <div className="user-online"
                                        style={{display: index % 3 === 0 || index % 7 === 0 ? 'block' : 'none'}}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="message-center-wrap">
                        <Center />
                    </div>
                    <UserPanel style={style} group={this.state.group} groupClick={this.groupClick} />
                </div>
            </div>
        )
    }
}
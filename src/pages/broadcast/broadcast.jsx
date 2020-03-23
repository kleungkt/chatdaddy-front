import React from 'react';
import './broadcast.css';

import BroadcastHeader from './broadcastHeader/broadcastHeader';
import BroadcastTable from './broadcastTable/broadcastTable';

import Pagination from '../../components/pagination/pagination';
import PopMenu from '../../components/popMenu/popMenu';
import Modal from '../../components/modal/modal';
import RightMenu from '../../containers/rightMenu/rightMenu';


export default class Broadcast extends React.Component {

    state = {
        status: 0,
        popMenu: {},
        modal: false,
        rightMenu: {
            open: false
        },
        rightRow: 'Message'
    }

    statusClick = status => this.setState({status});

    getPopMenu = e => {
        const c = e.target.getBoundingClientRect();
        this.setState({popMenu: {
            left: (c.x+c.width)+'px',
            top: (c.y+c.height)+'px',
            display: 'block'
        }})
    }

    clickPopMenu = e => {
        if(e.target.innerText === 'Delete') {
            this.setState({modal: true});
        }
        const popMenu = {display: 'none'};
        this.setState({popMenu});
    }

    clickModal = e => this.setState({modal: false});

    newCampaign = e => {
        this.setState({rightMenu: {
            open: true
        }})
    }

    closeRightMenu = () => this.setState({rightMenu: {open: false}});

    rightRowClick = row => this.setState({rightRow: row});

    render() {
        return(
            <div className="broadcast">
                <RightMenu status={this.state.rightMenu} 
                    closeRightMenu={this.closeRightMenu} 
                    rightRowClick={this.rightRowClick}
                    rightRow={this.state.rightRow}
                />
                <PopMenu popMenu={this.state.popMenu} clickPopMenu={this.clickPopMenu} />
                <Modal modal={this.state.modal} clickModal={this.clickModal} />
                <div className="broadcast-label">Broadcast Message</div>
                <BroadcastHeader 
                    status={this.state.status} statusClick={this.statusClick} 
                    newCampaign={this.newCampaign}
                />
                <BroadcastTable 
                    status={this.state.status}
                    getPopMenu={this.getPopMenu}
                    clickPopMenu={this.clickPopMenu}
                />
                <Pagination />
            </div>
        )
    }
}
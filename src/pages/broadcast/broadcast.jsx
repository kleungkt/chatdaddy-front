import React from 'react';
import './broadcast.css';

import BroadcastHeader from '../../components/broadcastHeader/broadcastHeader';
import Table from '../../components/table/table';
import Pagination from '../../components/pagination/pagination';
import PopMenu from '../../components/popMenu/popMenu';
import Modal from '../../components/modal/modal';

export default class Broadcast extends React.Component {

    state = {
        status: 0,
        popMenu: {},
        modal: false
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

    render() {
        return(
            <div className="broadcast">
                <PopMenu popMenu={this.state.popMenu} clickPopMenu={this.clickPopMenu} />
                <Modal modal={this.state.modal} clickModal={this.clickModal} />
                <div className="broadcast-label">Broadcast Message</div>
                <BroadcastHeader status={this.state.status} statusClick={this.statusClick} />
                <Table 
                    getPopMenu={this.getPopMenu}
                    clickPopMenu={this.clickPopMenu}
                />
                <Pagination />
            </div>
        )
    }
}
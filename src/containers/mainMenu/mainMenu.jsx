import React from 'react';
import './mainMenu.css';
import {withRouter} from 'react-router-dom';

import MainLogo from '../../components/mainLogo/mainLogo';
import MainMenuNavigation from '../../components/mainMenuNavigation/mainMenuNavigation';
import User from '../../components/user/user';
import MainMenuOptions from '../../components/mainMenuOptions/mainMenuOptions';

const menu = ['Audience', 'Message', 'Automation', 'Data'];

const mainMenu = props => {

    const loc = props.location.pathname;
    
    return(
        <div className="main-menu">
            <MainLogo />
            <div className="main-menu-center">
                <MainMenuNavigation menu={menu} />
                {loc === '/message' || loc === '/data' ?
                    <User user={props.user} />
                : <MainMenuOptions />}
            </div>
        </div>
    )
}

export default withRouter(mainMenu);
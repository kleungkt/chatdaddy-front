import React from 'react';
import './mainMenu.css';

import MainLogo from '../../components/mainLogo/mainLogo';
import MainMenuNavigation from '../../components/mainMenuNavigation/mainMenuNavigation';
import User from '../../components/user/user';

const menu = ['Audience', 'Message', 'Automation', 'Data'];

export default props => (
    <div className="main-menu">
        <MainLogo />
        <div className="main-menu-center">
            <MainMenuNavigation menu={menu} />
            <User user={props.user} />
        </div>
    </div>
)
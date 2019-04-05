import React, { useState } from 'react';
import './style.js';
import { MainContent } from './style.js';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/index.js';

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    };

    return (
        <React.Fragment>
            <Toolbar open={sideDrawerHandler} />
            <SideDrawer open={showSideDrawer} closed={sideDrawerHandler} />

            <MainContent className="content">
                {props.children}
            </MainContent>
        </React.Fragment>
    )
};

export default Layout;

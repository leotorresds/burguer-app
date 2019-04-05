import React from 'react';
import { Header } from './style';
import Logo from '../../Logo';
import NavigationItens from '../NavigationItens';
import DrawerToggle from '../SideDrawer/Drawertoggle';

const Toolbar = (props) => (
    <Header>
        <DrawerToggle clicked={props.open} />
        <div style={{ height: "80%" }}>
            <Logo />
        </div>
        <nav className="desktopOnly">
            <NavigationItens />
        </nav>
    </Header>
);

export default Toolbar;

import React from 'react';
import { SideDrawerContainer } from './style';
import Logo from "../../Logo";
import NavigationItens from '../NavigationItens';
import Backdrop from '../../UI/BackDrop';

const SideDrawer = (props) => {
    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <SideDrawerContainer open={props.open}>
                <div style={{ height: "11%", marginBottom: "32px" }}>
                    <Logo />
                </div>

                <nav className="desktopOnly">
                    <NavigationItens />
                </nav>
            </SideDrawerContainer>
        </>
    )
};

export default SideDrawer;

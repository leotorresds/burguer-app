import React from 'react';
import { ToggleMenu } from './style.js';

const Drawertoggle = (props) => (
    <ToggleMenu onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </ToggleMenu>
);

export default Drawertoggle;

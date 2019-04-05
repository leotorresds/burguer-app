import React from 'react';
import { Success, Danger } from './style';

const Button = (props) => {
    if (props.type === 'success') {
        return (<Success onClick={props.clicked}>{props.children}</Success>)
    } else if (props.type === 'danger') {
        return (<Danger onClick={props.clicked}>{props.children}</Danger>)
    }
};


export default Button;
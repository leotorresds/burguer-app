import React from 'react';
import { BackdropContainer } from './style';

const BackDrop = (props) => (
    props.show ? <BackdropContainer onClick={props.clicked} /> : null
);

export default BackDrop;

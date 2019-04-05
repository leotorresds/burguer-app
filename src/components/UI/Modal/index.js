import React from 'react';
import { ModalContainer } from './style';
import BackDrop from '../BackDrop';


const Modal = (props) => (
    <>
        <BackDrop show={props.show} clicked={props.modalClosed} />
        <ModalContainer style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }
        }>
            {props.children}
        </ModalContainer>
    </>
);

export default Modal;

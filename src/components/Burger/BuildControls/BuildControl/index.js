import React from 'react';
import { Container, MoreButton, LessButton, Label } from './style';

const BuildControl = (props) => (
    <Container>
        <Label>{props.label}</Label>
        <MoreButton onClick={props.removeIngredient} disabled={props.disabled}> Less </MoreButton>
        <LessButton className="more" onClick={props.addIngredient}> More </LessButton>
    </Container>
);

export default BuildControl;

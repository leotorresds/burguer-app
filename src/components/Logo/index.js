import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import { StyledLogo } from './style';

const Logo = (props) => (
    <StyledLogo>
        <img src={BurgerLogo} alt="Logo" />
    </StyledLogo>
);

export default Logo;

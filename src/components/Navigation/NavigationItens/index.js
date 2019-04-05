import React from 'react';
import { Itens, NavigationItem } from './style';

const NavigationItens = (props) => (
    <Itens>
        <NavigationItem>
            <a className={props.active ? 'active' : null} href="/"> BurgerBuilder </a>
        </NavigationItem>
        <NavigationItem>
            <a className='active' href="/"> Checkout </a>
        </NavigationItem>
    </Itens>
);

export default NavigationItens;

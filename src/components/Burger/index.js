import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import { BurgerBox } from "./style";

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, index) => {
            return <BurgerIngredient key={igKey + index} type={igKey} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    return (
        <BurgerBox>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients.length !== 0 ? transformedIngredients : <p>Please start the burguer!</p>}
            <BurgerIngredient type="bread-bottom" />
        </BurgerBox>
    )
}

export default Burger;

import React from 'react';
import { BreadTop, BreadBottom, Meat, Seeds1, Seeds2, Cheese, Salad, Bacon } from './style';

const BurguerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case 'bread-bottom':
            ingredient = <BreadBottom />;
            break;
        case 'bread-top':
            ingredient = (
                <BreadTop>
                    <Seeds1 />
                    <Seeds2 />
                </BreadTop>
            );
            break;
        case 'meat':
            ingredient = <Meat />
            break;
        case 'cheese':
            ingredient = <Cheese />
            break;
        case 'salad':
            ingredient = <Salad />
            break;
        case 'bacon':
            ingredient = <Bacon />
            break;
    }

    return ingredient;

};

export default BurguerIngredient;

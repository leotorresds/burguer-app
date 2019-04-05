import React from 'react';
import { BuildControlsBox, OrderButton } from "./style";
import BuildControl from './BuildControl';


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' }
];

const BuildControls = (props) => (
    <BuildControlsBox>
        <p>R$<strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(control => {
            return <BuildControl
                key={control.label}
                label={control.label}
                addIngredient={() => props.addIngredient(control.type)}
                removeIngredient={() => props.removeIngredient(control.type)}
                disabled={props.disabled[control.type]}
            />
        })}
        <OrderButton onClick={props.ordered} disabled={!props.purchasable}>CHECKOUT</OrderButton>
    </BuildControlsBox>
);

export default BuildControls;

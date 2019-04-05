import React from 'react';
import Button from '../../UI/Button';

const OrderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
        return (<li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
            : {props.ingredients[igKey]}</li>
        );
    });
    return (
        <>
            <h3>Your Order</h3>
            <p> A delicious burguer with de following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <Button type="danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button type="success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </>
    )
};

export default OrderSummary;

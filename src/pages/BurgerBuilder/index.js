import React, { useState } from 'react';
import Burger from '../../components/Burger/';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6
};




const BurgerBuilder = () => {

    // Change to use Ingredients by name

    const [ingredients, setIngredients] = useState({
        meat: 0,
        cheese: 0,
        bacon: 0,
        salad: 0
    });

    const [totalPrice, setTotalPrice] = useState(4);
    const [purchasable, setPurchasable] = useState(false);
    const [purchasing, setPurchasing] = useState(false);

    const updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        setPurchasable(sum > 0);
    }

    const addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...ingredients
        };

        updatedIngredients[type] = ingredients[type] + 1;

        const newPrice = totalPrice + INGREDIENT_PRICES[type];

        setIngredients(updatedIngredients);
        setTotalPrice(newPrice);
        updatePurchaseState(updatedIngredients);
    };

    const removeIngredientHandler = (type) => {
        if (ingredients[type] === 0) {
            return false;
        }

        const updatedIngredients = {
            ...ingredients
        };

        updatedIngredients[type] = ingredients[type] - 1;

        const newPrice = totalPrice - INGREDIENT_PRICES[type];

        setIngredients(updatedIngredients);
        setTotalPrice(newPrice);
        updatePurchaseState(updatedIngredients);
    };

    const purchasingHandler = () => {
        setPurchasing(!purchasing);
    };

    const continuePurchasing = () => {
        alert("Continuando compra!");
    }


    const disabledInfo = {
        ...ingredients
    };

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
        <>
            <Modal show={purchasing} modalClosed={purchasingHandler}>
                <OrderSummary ingredients={ingredients}
                    purchaseCancel={purchasingHandler}
                    purchaseContinue={continuePurchasing}
                    price={totalPrice} />
            </Modal>
            <Burger ingredients={ingredients} />
            <BuildControls
                addIngredient={addIngredientHandler}
                removeIngredient={removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={purchasable}
                totalPrice={totalPrice}
                ordered={purchasingHandler}
            />
        </>
    );
};

export default BurgerBuilder;
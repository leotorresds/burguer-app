import React, { useState, useEffect } from "react";
import Burger from "../../components/Burger/";
import BuildControls from "../../components/Burger/BuildControls";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";
import Spinner from "../../components/UI/Spinner";
import api from "../../services/api";
import withErrorHandler from "../../hoc/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.6
};

const BurgerBuilder = () => {
  // Change to use Ingredients by name

  const [ingredients, setIngredients] = useState(null);

  const [totalPrice, setTotalPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/ingredients.json");
      setIngredients(response.data);
    };
    fetchData();
  }, []);

  const updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    setPurchasable(sum > 0);
  };

  const addIngredientHandler = type => {
    const updatedIngredients = {
      ...ingredients
    };

    updatedIngredients[type] = ingredients[type] + 1;

    const newPrice = totalPrice + INGREDIENT_PRICES[type];

    setIngredients(updatedIngredients);
    setTotalPrice(newPrice);
    updatePurchaseState(updatedIngredients);
  };

  const removeIngredientHandler = type => {
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

  const continuePurchasing = async () => {
    setLoading(true);
    const order = {
      ingredients,
      price: totalPrice.toFixed(2),
      customer: {
        name: "Leo"
      },
      delivery: "fastest"
    };
    try {
      const response = await api.post("/orders.json", order);
      setLoading(false);
      setPurchasing(false);
    } catch (err) {}
  };

  const disabledInfo = {
    ...ingredients
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  if (ingredients) {
    return (
      <>
        <Modal show={purchasing} modalClosed={purchasingHandler}>
          {loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              ingredients={ingredients}
              purchaseCancel={purchasingHandler}
              purchaseContinue={continuePurchasing}
              price={totalPrice}
            />
          )}
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
  } else {
    return <Spinner />;
  }
};

export default withErrorHandler(BurgerBuilder, api);

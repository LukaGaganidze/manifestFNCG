import React from "react";

import classes from "./WireItem.module.css";

import ButtonAddLARGE from "../../../../UI/buttons/Button-Large-Add/ButtonAddLARGE";

import ButtonAddedLARGE from "../../../../UI/buttons/Button-ADDED-Large/ButtonAddedLARGE";

import ShoppingItemCard from "../../../../UI/ShoppingItemCard/ShoppingItemCard";

import { useDispatch, useSelector } from "react-redux";
import { cartFunctionalityActions } from "../../../../../store/CartFunctionality-slice";

const WireItem = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems
  );
  const itemIsInAdded = cartItems.some((el) => el.id === props.id);

  const addWireProductToCartHandler = () => {
    dispatch(
      cartFunctionalityActions.addItemTocart({
        name: props.name,
        description: props.description,
        img: props.img,
        price: props.price,
        quantity: props.quantity,
        id: props.id,
      })
    );
  };
  const removeWireProductFromCartHandler = () => {
    dispatch(cartFunctionalityActions.removeItemFromCart(props.id));
  };

  return (
    <ShoppingItemCard className={classes["individual-wire-product"]}>
      <div className={classes["wire-img-container"]}>
        <img src={props.img} className={classes["wire-img"]} />
      </div>
      <div className={classes["wire-text"]}>
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <span>{props.price.toFixed(2)}$</span>
        </div>

        {itemIsInAdded && (
          <ButtonAddedLARGE
            onRemoveItem={removeWireProductFromCartHandler}
            className={classes["wire-button"]}
          />
        )}
        {!itemIsInAdded && (
          <ButtonAddLARGE
            onAddItem={addWireProductToCartHandler}
            className={classes["wire-button"]}
          />
        )}
      </div>
    </ShoppingItemCard>
  );
};

export default WireItem;

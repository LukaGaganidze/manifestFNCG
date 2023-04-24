import React from "react";

import ShoppingItemCard from "../../../../UI/ShoppingItemCard/ShoppingItemCard";

import classes from "./FormItemSmall.module.css";

import { useDispatch, useSelector } from "react-redux";
import { cartFunctionalityActions } from "../../../../../store/CartFunctionality-slice";

import ButtonAddSMALL from "../../../../UI/buttons/Button-Add-Small/ButtonAddSMALL";
import ButtonAddedSMALL from "../../../../UI/buttons/Button-ADDED-Small/ButtonAddedSMALL";

const ShoppingCartSmall = (props) => {
  const cartProducts = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems
  );
  const productIsInCart = cartProducts.some((el) => el.id === props.id);

  const dispatch = useDispatch();
  const addFormToCartHandler = () => {
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
  const removeFormFromCartHandler = () => {
    dispatch(cartFunctionalityActions.removeItemFromCart(props.id));
  };
  return (
    <ShoppingItemCard className={classes["form-shopping-item-small"]}>
      <img src={props.img} />
      <div className={classes["form-item-descriprion"]}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <span>{props.price.toFixed(2)}$</span>
      </div>
      {!productIsInCart && <ButtonAddSMALL onAddItem={addFormToCartHandler} />}
      {productIsInCart && (
        <ButtonAddedSMALL onRemoveItem={removeFormFromCartHandler} />
      )}
    </ShoppingItemCard>
  );
};

export default ShoppingCartSmall;

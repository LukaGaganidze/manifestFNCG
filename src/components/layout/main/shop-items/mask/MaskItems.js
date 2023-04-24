import React from "react";

import classes from "./MaskItems.module.css";

import ShoppingItemCard from "../../../../UI/ShoppingItemCard/ShoppingItemCard";
import ButtonAddSMALL from "../../../../UI/buttons/Button-Add-Small/ButtonAddSMALL";
import ButtonAddedSMALL from "../../../../UI/buttons/Button-ADDED-Small/ButtonAddedSMALL";

import { useDispatch, useSelector } from "react-redux";
import { cartFunctionalityActions } from "../../../../../store/CartFunctionality-slice";

const MaskItems = (props) => {
  const cartProducts = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems
  );
  const ProductIsInCart = cartProducts.some((el) => el.id === props.id);

  const dispatch = useDispatch();

  const addMaskProductToCart = () => {
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
  const removeMaskProductFromCart = () => {
    dispatch(cartFunctionalityActions.removeItemFromCart(props.id));
  };

  return (
    <ShoppingItemCard className={classes["mask-shopping-item"]}>
      <img src={props.img} />
      <div className={classes["mask-item-descriprion"]}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <span>{props.price.toFixed(2)}$</span>
      </div>
      {!ProductIsInCart && <ButtonAddSMALL onAddItem={addMaskProductToCart} />}
      {ProductIsInCart && (
        <ButtonAddedSMALL onRemoveItem={removeMaskProductFromCart} />
      )}
    </ShoppingItemCard>
  );
};

export default MaskItems;

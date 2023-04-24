import React from "react";

import classes from "./WeaponsProductItem.module.css";

import ShoppingItemCard from "../../../../UI/ShoppingItemCard/ShoppingItemCard";
import ButtonAddLARGE from "../../../../UI/buttons/Button-Large-Add/ButtonAddLARGE";
import ButtonAddedLARGE from "../../../../UI/buttons/Button-ADDED-Large/ButtonAddedLARGE";

import { useDispatch, useSelector } from "react-redux";
import { cartFunctionalityActions } from "../../../../../store/CartFunctionality-slice";

const WeaponsProductItem = (props) => {
  const cartItems = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems
  );

  const itemIsInAdded = cartItems.some((el) => el.id === props.id);

  const dispatch = useDispatch();
  const addWeaponProductToCart = () => {
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
  const removeWeaponProductFromCart = () => {
    dispatch(cartFunctionalityActions.removeItemFromCart(props.id));
  };

  return (
    <ShoppingItemCard className={classes["individual-weapon-product"]}>
      <img src={props.img} className={classes["weapon-img"]} />
      <div className={classes["weapon-info"]}>
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <span>{props.price}$</span>
        </div>
        {itemIsInAdded && (
          <ButtonAddedLARGE
            onRemoveItem={removeWeaponProductFromCart}
            className={classes["weapon-button"]}
          />
        )}
        {!itemIsInAdded && (
          <ButtonAddLARGE
            onAddItem={addWeaponProductToCart}
            className={classes["weapon-button"]}
          />
        )}
      </div>
    </ShoppingItemCard>
  );
};

export default WeaponsProductItem;

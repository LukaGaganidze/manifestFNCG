import React from "react";

import classes from "./FormItemLarge.module.css";

import ShoppingItemCard from "../../../../UI/ShoppingItemCard/ShoppingItemCard";
import ButtonAddLARGE from "../../../../UI/buttons/Button-Large-Add/ButtonAddLARGE";
import ButtonAddedLarge from "../../../../UI/buttons/Button-ADDED-Large/ButtonAddedLARGE";

import { useDispatch, useSelector } from "react-redux";
import { cartFunctionalityActions } from "../../../../../store/CartFunctionality-slice";

const FormItemLarge = (props) => {
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

  const removeFormCartHandler = () => {
    dispatch(cartFunctionalityActions.removeItemFromCart(props.id));
  };

  const cartProducts = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems
  );
  const productIsInCart = cartProducts.some((el) => el.id === props.id);

  return (
    <ShoppingItemCard className={classes["individual-form-product-large"]}>
      <img src={props.img} className={classes["form-img-large"]} />

      <div className={classes["form-info-large"]}>
        <div>
          <h2>MENS JACKET</h2>
          <p>FIE X APEX FIE MENS JACKET</p>
        </div>

        <div>
          <span>261.00$</span>
          {!productIsInCart && (
            <ButtonAddLARGE onAddItem={addFormToCartHandler} />
          )}
          {productIsInCart && (
            <ButtonAddedLarge onRemoveItem={removeFormCartHandler} />
          )}
        </div>
      </div>
    </ShoppingItemCard>
  );
};

export default FormItemLarge;

import React, { useState } from "react";
import { createPortal } from "react-dom";

import classes from "./WeaponsProductItem.module.css";

import ShoppingItemCard from "../../../../UI/ShoppingItemCard/ShoppingItemCard";
import ButtonAddLARGE from "../../../../UI/buttons/Button-Large-Add/ButtonAddLARGE";
import ButtonAddedLARGE from "../../../../UI/buttons/Button-ADDED-Large/ButtonAddedLARGE";
import CartQuantity from "../../../../functionalComponenets/cartQuantity";

import { useDispatch, useSelector } from "react-redux";
import { cartFunctionalityActions } from "../../../../../store/CartFunctionality-slice";

const WeaponsProductItem = (props) => {
  // console.log(props.secondaryImgs[0]);

  const dispatch = useDispatch();

  const addQuantityHandler = () => {
    dispatch(cartFunctionalityActions.addQuantity(props.id));
  };
  const remQuantityHandler = () => {
    dispatch(cartFunctionalityActions.remQuantity(props.id));
  };
  const cartItems = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems
  );
  const currItemIncart = cartItems.find((item) => item.id === props.id);

  const [additionalInfo, setAdditionalinfo] = useState(false);
  const itemIsInAdded = cartItems.some((el) => el.id === props.id);
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

  const openAdditionalInformationhandler = () => {
    setAdditionalinfo(true);
  };
  const closeAdditionalInformationhandler = () => {
    setAdditionalinfo(false);
  };

  const additionalweaponInfoBackground = (
    <div
      onClick={closeAdditionalInformationhandler}
      className={classes["weapon-additional-info-overlay"]}
    ></div>
  );

  const additionalweaponInfo = (
    <div className={classes["additional-info-content-container"]}>
      <div className={classes["images-div"]}>
        {props.secondaryImgs.map((img) => (
          <img key={img} className={classes["additional-pic"]} src={img} />
        ))}
      </div>
      <div>
        <div className={classes["information-div"]}>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <p>{props.price}</p>
          <p>{props.additionalInfo}</p>
        </div>

        <div className={classes["popup-actions"]}>
          {currItemIncart ? (
            <p className={classes["popup-actions-header"]}>
              Item is added to the cart
            </p>
          ) : (
            <p className={classes["popup-actions-header"]}>Add To Cart</p>
          )}
          {currItemIncart ? (
            <CartQuantity
              className={classes["popup-controller-price"]}
              onAddItem={addQuantityHandler}
              onRemoveItem={remQuantityHandler}
              quantity={currItemIncart ? currItemIncart.quantity : 0}
            />
          ) : (
            <ButtonAddLARGE
              onAddItem={addWeaponProductToCart}
              className={`${classes["weapon-button"]} ${classes["weapon-button-poppup"]}`}
            />
          )}
        </div>
      </div>
    </div>
  );

  return (
    <ShoppingItemCard className={classes["individual-weapon-product"]}>
      {additionalInfo &&
        createPortal(
          additionalweaponInfoBackground,
          document.getElementById("additionalInfoBackground")
        )}

      {additionalInfo &&
        createPortal(
          additionalweaponInfo,
          document.getElementById("additionalInfo")
        )}
      <img
        onClick={openAdditionalInformationhandler}
        src={props.img}
        className={classes["weapon-img"]}
      />
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

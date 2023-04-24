import React from "react";

import ShoppincSectionCard from "../../../../UI/ShoppincSectionCard/ShoppincSectionCard";
import WeaponsProductItem from "./WeaponsProductItem";

import foilImage from "../../../../../assets/main-content-pics/weapons/foil/foilmain/foilmain.jpg";
import epeeImage from "../../../../../assets/main-content-pics/weapons/epee/epeemain/epeemain.jpg";

const WeaponsDummyData = [
  {
    name: "COMPLETE FOIL",
    description: "PROJECT ZER0 FOIL",
    img: foilImage,
    price: 210,
    quantity: 1,
    id: "foil-1",
  },
  {
    name: "COMPLETE EPEE",
    description: "PROJECT ZER0 EPEE",
    img: epeeImage,
    price: 210,
    quantity: 1,
    id: "eppe-1",
  },
];

const Weapons = () => {
  return (
    <ShoppincSectionCard>
      {WeaponsDummyData.map((weapon) => (
        <WeaponsProductItem
          name={weapon.name}
          description={weapon.description}
          img={weapon.img}
          price={weapon.price}
          quantity={weapon.quantity}
          id={weapon.id}
          key={weapon.id}
        />
      ))}
    </ShoppincSectionCard>
  );
};

export default Weapons;

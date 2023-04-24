import React from "react";

import classes from "./Wire.module.css";

import ShoppincSectionCard from "../../../../UI/ShoppincSectionCard/ShoppincSectionCard";

import WireItem from "./WireItem";

// wire images
import foilSabreWireImg from "../../../../../assets/main-content-pics/wires/foil/foil-wire-main/foil-wire-main.jpg";
import epeeWireImg from "../../../../../assets/main-content-pics/wires/epee/epee-wire-main/epee-wire-main.jpg";

const WireDummyData = [
  {
    name: "SABRE/FOIL WIRE",
    description: "2-PIN BODYWIRE",
    img: foilSabreWireImg,
    price: 24,
    quantity: 1,
    id: "SABRE/FOIL-bodyWire",
  },
  {
    name: "EPEE WIRE",
    description: "3-PIN BODYWIRE",
    img: epeeWireImg,
    price: 25,
    quantity: 1,
    id: "EPEE-bodyWire",
  },
];

const Wire = () => {
  return (
    <ShoppincSectionCard className={classes["wire-product-section"]}>
      {WireDummyData.map((wire) => (
        <WireItem
          name={wire.name}
          description={wire.description}
          img={wire.img}
          price={wire.price}
          quantity={wire.quantity}
          id={wire.id}
          key={wire.id}
        />
      ))}
    </ShoppincSectionCard>
  );
};

export default Wire;

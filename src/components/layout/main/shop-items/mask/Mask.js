import React from "react";
import MaskItems from "./MaskItems";

import ShoppincSectionCard from "../../../../UI/ShoppincSectionCard/ShoppincSectionCard";

// mask images
import foiMAskMain from "../../../../../assets/main-content-pics/maks/mask1/mask1-main/mask1-main.jpg";
import epeeMAskMain from "../../../../../assets/main-content-pics/maks/mask2/mask2-main/mask2-main.jpg";
import sabreMAskMain from "../../../../../assets/main-content-pics/maks/mask3/mask3-main/mask3-main.jpg";
import practiceMAskMain from "../../../../../assets/main-content-pics/maks/mask4/mask1-main/mask4-main.jpg";

const MaskDummyData = [
  {
    name: "FOIL MASK",
    description: "X-CHANGE FIE CONTOUR FOIL MASK",
    img: foiMAskMain,
    price: 270,
    quantity: 1,
    id: "foil-mask",
  },
  {
    name: "EPEE MASK",
    description: "X-CHANGE FIE CONTOUR EPEE MASK",
    img: epeeMAskMain,
    price: 250,
    quantity: 1,
    id: "eppe-mask",
  },
  {
    name: "SABRE MASK",
    description: "X-CHANGE FIE CONTOUR SABRE MASK",
    img: sabreMAskMain,
    price: 280,
    quantity: 1,
    id: "sabre-mask",
  },
  {
    name: "PRACTICE MASK",
    description: "X-CHANGE FIE CONTOUR PRACTICE MASK",
    img: practiceMAskMain,
    price: 200,
    quantity: 1,
    id: "practice-mask",
  },
];

const Mask = () => {
  return (
    <ShoppincSectionCard>
      {MaskDummyData.map((product) => (
        <MaskItems
          name={product.name}
          description={product.description}
          img={product.img}
          price={product.price}
          id={product.id}
          key={product.id}
          quantity={product.quantity}
        />
      ))}
    </ShoppincSectionCard>
  );
};

export default Mask;

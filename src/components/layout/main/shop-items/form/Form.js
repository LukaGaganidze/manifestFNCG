import React from "react";

import ShoppingSectionCard from "../../../../UI/ShoppincSectionCard/ShoppincSectionCard";

import FormItemSmall from "./FormItemSmall";
import FormItemLarge from "./FormItemLarge";

import classes from "./Form.module.css";

// form images

// small
import glovePic from "../../../../../assets/main-content-pics/forms/glove/glove-main/glove-main.jpg";
import foilLamePic from "../../../../../assets/main-content-pics/forms/foilJacket/faoil-man-main/faoil-man-main.jpg";
import sabreLamePic from "../../../../../assets/main-content-pics/forms/sabreJacket/sabre-jacket-main/sabre-jacket-main.jpg";

// large
import menFormPic from "../../../../../assets/main-content-pics/forms/formMan/form-man-main/form-man-main.jpg";
import womanFormPic from "../../../../../assets/main-content-pics/forms/formWoman/form-woman-main/form-woman-main.jpg";

const FormDummyData = [
  {
    name: "GLOVE",
    description: "ADVANCED GRYPTONITE FOIL / EPEE GLOVE",
    img: glovePic,
    price: 39,
    quantity: 1,
    id: "GLOVE",
    smallDisplay: true,
  },
  {
    name: "FOIL LAME",
    description: "LIGHTWEIGHT FOIL LAME MENS",
    img: foilLamePic,
    price: 181,
    quantity: 1,
    id: "LIGHTWEIGHTFOILLAMEMENS",
    smallDisplay: true,
  },
  {
    name: "SABRE LAME",
    description: "LIGHTWEIGHT SABRE LAME MENS",
    img: sabreLamePic,
    price: 290,
    quantity: 1,
    id: "LIGHTWEIGHTSABRELAMEMENS",
    smallDisplay: true,
  },
  {
    name: "MENS JACKET",
    description: "FIE X APEX FIE MENS JACKET",
    img: menFormPic,
    price: 261,
    quantity: 1,
    id: "MENSJACKET",
    smallDisplay: false,
  },
  {
    name: "WOMANS JACKET",
    description: "FIE X APEX FIE WOMANS JACKET",
    img: womanFormPic,
    price: 39,
    quantity: 1,
    id: "WOMANSJACKET",
    smallDisplay: false,
  },
];
const FormDataSmall = FormDummyData.filter((el) => el.smallDisplay);
const FormDataLarge = FormDummyData.filter((el) => !el.smallDisplay);

const Form = () => {
  return (
    <React.Fragment>
      <ShoppingSectionCard className={classes["form-product-sec1"]}>
        {FormDataSmall.map((form) => (
          <FormItemSmall
            name={form.name}
            description={form.description}
            img={form.img}
            price={form.price}
            quantity={form.quantity}
            id={form.id}
            key={form.id}
          />
        ))}
      </ShoppingSectionCard>

      <div className={classes["form-sec-innermarg"]}></div>

      <ShoppingSectionCard className={classes["form-product-sec1"]}>
        {FormDataLarge.map((form) => (
          <FormItemLarge
            name={form.name}
            description={form.description}
            img={form.img}
            price={form.price}
            quantity={form.quantity}
            id={form.id}
            key={form.id}
          />
        ))}
      </ShoppingSectionCard>
    </React.Fragment>
  );
};

export default Form;

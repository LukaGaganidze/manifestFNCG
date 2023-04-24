import React from "react";
import classes from "./fencninglogo.module.css";
import { useSelector } from "react-redux";

const FNCGlogo = (props) => {
  const meanuUIState = useSelector((state) => state.MenuUISlice.menuIsOpen);
  return (
    <div
      className={`${classes.mainlogo} ${
        meanuUIState ? classes["passive-logo"] : ""
      }`}
    ></div>
  );
};

export default FNCGlogo;

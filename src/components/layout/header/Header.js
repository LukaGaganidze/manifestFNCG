import React from "react";

import classes from "./Header.module.css";

import FNCGlogo from "../../../assets/logo-n-svgs/FNCGlogo/FNCGlogo";
import HeaderCartButton from "./HeaderCartButton";
import HeaderManu from "./HeaderMenu";

const Header = () => {
  return (
    <header>
      <div className={classes["header-item"]}>
        <FNCGlogo />
      </div>
      <div className={classes["header-item"]}>
        <HeaderManu />
      </div>
      <div className={classes["header-item"]}>
        <HeaderCartButton />
      </div>
    </header>
  );
};

export default Header;

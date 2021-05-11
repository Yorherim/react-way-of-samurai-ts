import React from "react";

import classes from "./Header.module.scss";
import logo from "../../assets/images/logo_header.png";

function Header() {
    return (
        <header className={classes.header}>
            <img src={logo} alt={"logo"} />
        </header>
    );
}

export default Header;

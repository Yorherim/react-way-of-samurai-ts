import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.scss";
import logo from "../../assets/images/logo_header.png";

type HeaderPropsType = {
    login: string | null;
    isAuth: boolean;
};

function Header({ login, isAuth }: HeaderPropsType) {
    return (
        <header className={classes.header}>
            <img src={logo} alt={"logo"} />
            <div className={classes.loginBlock}>
                <NavLink to={"/login"}>{isAuth ? login : "Login"}</NavLink>
            </div>
        </header>
    );
}

export default Header;

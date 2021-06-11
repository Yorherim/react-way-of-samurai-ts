import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.scss";
import logo from "../../assets/images/logo_header.png";

type HeaderPropsType = {
    login: string | null;
    isAuth: boolean;
    logout: () => void;
};

function Header({ login, isAuth, logout }: HeaderPropsType) {
    return (
        <header className={classes.header}>
            <img src={logo} alt={"logo"} />
            <div className={classes.loginBlock}>
                {isAuth ? (
                    <>
                        <NavLink to={"/profile"}>{login}</NavLink>
                        <button onClick={logout}>logout</button>
                    </>
                ) : (
                    <NavLink to={"/login"}>Login</NavLink>
                )}
            </div>
        </header>
    );
}

export default Header;

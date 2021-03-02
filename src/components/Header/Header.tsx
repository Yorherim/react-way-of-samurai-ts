import React from "react";
import classes from "./Header.module.scss";

function Header() {
    return (
        <header className={classes.header}>
            <img
                src="https://sun9-43.userapi.com/c624116/v624116060/250b7/WB6xXxDpBZA.jpg"
                alt={"logo"}
            />
        </header>
    );
}

export default Header;

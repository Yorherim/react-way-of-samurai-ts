import React from "react";

import classes from "./Preloader.module.scss";

function Preloader() {
    return (
        <div className={classes.loader}>
            <div className={classes.loaderInner}>
                <div className={classes.loaderLineWrap}>
                    <div className={classes.loaderLine}></div>
                </div>
                <div className={classes.loaderLineWrap}>
                    <div className={classes.loaderLine}></div>
                </div>
                <div className={classes.loaderLineWrap}>
                    <div className={classes.loaderLine}></div>
                </div>
                <div className={classes.loaderLineWrap}>
                    <div className={classes.loaderLine}></div>
                </div>
                <div className={classes.loaderLineWrap}>
                    <div className={classes.loaderLine}></div>
                </div>
            </div>
        </div>
    );
}

export default Preloader;

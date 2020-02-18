import React from 'react';
import classes from "./Header.module.scss"
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const Header = () => {
    return (
        <div className={classes.Header}>
            <div className={classes.Logo}>Logo</div>
            <HeaderMenu/>
        </div>
    );
};

export default Header;
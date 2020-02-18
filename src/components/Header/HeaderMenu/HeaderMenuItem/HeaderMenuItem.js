import React from 'react';
import classes from "./HeaderMenuItem.module.scss"

const HeaderMenuItem = ({isActive, name}) => {
    return (
        <li className={classes.HeaderMenuItem}>
            {name}
        </li>
    );
};

export default HeaderMenuItem;
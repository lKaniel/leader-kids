import React from 'react';
import classes from "./HeaderMenu.module.scss";
import menuItems from "./menuItems";
import HeaderMenuItem from "./HeaderMenuItem/HeaderMenuItem"

const HeaderMenu = () => {
    let headerMenuItems = menuItems.map((item, number) => (
        <HeaderMenuItem isActive={item.isActive} name={item.name} key={number}/>
    ));
    console.log(headerMenuItems);
    return (
        <ul className={classes.HeaderMenu}>
            {headerMenuItems}
        </ul>
    );
};

export default HeaderMenu;
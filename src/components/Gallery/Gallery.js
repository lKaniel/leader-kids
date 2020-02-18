import React from 'react';
import classes from "./Gallery.module.scss"
// import background from "../../background.jpg";
const Gallery = () => {
    return (
        <div className={classes.Gallery}>
            <ul>
                <li>Смарт навчання.</li>
                <li><span>У твоїй школі.</span></li>
                <li>
                    <button>Почати навчання</button>
                </li>
            </ul>
            <div>
            </div>
            {/*<img src={background} alt="background"/>*/}
        </div>
    );
};

export default Gallery;
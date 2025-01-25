import React from "react";

import classes from "./filter.module.scss"

const Filter = () => {
    return (
        <div className={classes.filter}>
            <div className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <div className={classes.checkbox}>
                <input type="checkbox" />
                <span>Все</span>
            </div>
            <div className={classes.checkbox}>
                <input type="checkbox" />
                <span>Без пересадок</span>
            </div>
            <div className={classes.checkbox}>
                <input type="checkbox" />
                <span>1 пересадка</span>
            </div>
            <div className={classes.checkbox}>
                <input type="checkbox" />
                <span>2 пересадки</span>
            </div>
            <div className={classes.checkbox}>
                <input type="checkbox" />
                <span>3 пересадки</span>
            </div>
        </div>
    )
}

export default Filter
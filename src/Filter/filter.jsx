import React from "react";

import "./filter.scss"

const Filter = () => {
    return (
        <div className="filter">
            <div className="title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <div className="checkbox">
                <input type="checkbox" />
                <span>Все</span>
            </div>
            <div className="checkbox">
                <input type="checkbox" />
                <span>Без пересадок</span>
            </div>
            <div className="checkbox">
                <input type="checkbox" />
                <span>1 пересадка</span>
            </div>
            <div className="checkbox">
                <input type="checkbox" />
                <span>2 пересадки</span>
            </div>
            <div className="checkbox">
                <input type="checkbox" />
                <span>3 пересадки</span>
            </div>
        </div>
    )
}

export default Filter
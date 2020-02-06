import React from "react";
import "./FoldedBox.css";

const FoldedBox = ({title, totalResults, children}) => {
    return(
        <div className="FoldedBox">
            <div className="header-bar ent-text-shadow">
                <div className="type-title">
                    <h2>{title}</h2>
                </div>
                <div className="total-results fg fgg">{totalResults}</div>
                <div className="fold-btn">
                    <button></button>
                </div>
            </div>
            {children}
        </div>
    );
};

export default FoldedBox;
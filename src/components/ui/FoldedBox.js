import React from "react";
import "./FoldedBox.css";
import back from "../../assets/back.svg";

const FoldedBox = ({title, totalResults, children}) => {
    return(
        <div className="FoldedBox">
            <div className="header-bar ent-text-shadow">
                <div className="type-title">
                    <h2>{title}</h2>
                </div>
                <div className="total-results fg fgg" style={{flexGrow:"1", flexFlow:"1"}}> &bull; {totalResults} results</div>
                <div className="fold-btn" style={{alignSelf:"stretch"}}>
                    <button>
                        <img src={back} alt="<"/>
                    </button>
                </div>
            </div>
            <div className="detail-container">
                <div className="detail-container-wrapper">{children}</div>
            </div>
        </div>
    );
};

export default FoldedBox;
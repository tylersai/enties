import React from "react";
import "./FoldedBox.css";

const FoldedBox = ({title, totalResults, children}) => {
    return(
        <div className="FoldedBox">
            {children}
        </div>
    );
};

export default FoldedBox;
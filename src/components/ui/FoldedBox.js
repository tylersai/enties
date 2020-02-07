import React, { useState, useEffect } from "react";
import "./FoldedBox.css";
import back from "../../assets/back.svg";

const FoldedBox = ({title, totalResults, children}) => {

    const ref = React.createRef();
    const [detailHeight, setDetailHeight] = useState(0.0);

    useEffect(() => {
        setTimeout(() => {
            setDetailHeight(ref.current.clientHeight);
        }, 1000);
    }, []);

    const toggleFold = () => {
        if(ref.current.clientHeight) {
            ref.current.style.height = 0;
            ref.current.style.paddingTop = 0;
            ref.current.style.paddingBottom = 0;
        } else {
            ref.current.style.height = detailHeight + "px";
            ref.current.style.paddingTop = "0.5vw";
            ref.current.style.paddingBottom = "0.5vw";
        }
    };

    return(
        <div className="FoldedBox">
            <div className="header-bar ent-text-shadow">
                <div className="type-title">
                    <h3>{title}</h3>
                </div>
                <div className="total-results fg fgg">
                    <span>&bull; {totalResults} results</span>
                </div>
                <div className="fold-btn" style={{alignSelf:"stretch"}}>
                    <button onClick={toggleFold}>
                        <img src={back} alt="<"/>
                    </button>
                </div>
            </div>
            <div className="detail-container" ref={ref}>
                <div className="detail-container-wrapper">{children}</div>
            </div>
        </div>
    );
};

export default FoldedBox;
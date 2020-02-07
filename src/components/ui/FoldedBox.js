import React, { useState, useEffect } from "react";
import "./FoldedBox.css";
import top from "../../assets/top.svg";

const FoldedBox = ({title, totalResults, children}) => {

    const ref = React.createRef();
    const [detailHeight, setDetailHeight] = useState(0.0);

    useEffect(() => {
        setTimeout(() => {
            setDetailHeight(ref.current.clientHeight);
        }, 1000);
    }, []);

    const toggleFold = (e) => {
        // e.target.style.transition = "transform 200ms ease-out";
        if(ref.current.clientHeight) {
            ref.current.style.height = 0;
            ref.current.style.paddingTop = 0;
            ref.current.style.paddingBottom = 0;
            // e.target.style.transform = "rotate(180deg)";
            e.target.classList.add("rotate-180");
        } else {
            ref.current.style.height = detailHeight + "px";
            ref.current.style.paddingTop = "0.5vw";
            ref.current.style.paddingBottom = "0.5vw";
            // e.target.style.transform = "rotate(0deg)";
            e.target.classList.remove("rotate-180");
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
                        <img src={top} alt="<"/>
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
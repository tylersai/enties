import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FoldedBox.css";
import top from "../../assets/top.svg";

const FoldedBox = ({title, totalResults, children, routeLink}) => {

    const ref = React.createRef();
    const [detailHeight, setDetailHeight] = useState(0.0);

    useEffect(() => {
        let timeout;
        if(totalResults>0){
            timeout = setTimeout(() => {
                setDetailHeight(ref.current.clientHeight);
            }, 1000);
        }
        
        return () => {
            if(totalResults>0)
                clearTimeout(timeout);
        };
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
            ref.current.style.height = detailHeight - vwTOpx(1) + "px";
            ref.current.style.paddingTop = "0.5vw";
            ref.current.style.paddingBottom = "0.5vw";
            // e.target.style.transform = "rotate(0deg)";
            e.target.classList.remove("rotate-180");
        }
    };

    function vwTOpx(value) {
        var w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          x = w.innerWidth || e.clientWidth || g.clientWidth;
      
        var result = (x*value)/100;
        return result;
    }

    if(totalResults===0) return null;

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
                {
                    totalResults > 10 && routeLink ? (
                        <div className="see-all">
                            <Link to={routeLink}><h4>SEE ALL &rarr;</h4></Link>
                        </div>
                    ):null
                }
            </div>
        </div>
    );
};

export default FoldedBox;
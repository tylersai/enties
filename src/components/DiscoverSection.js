import React, { useState, useEffect } from "react";
import "./DiscoverSection.css";
import discover from "../assets/discover.svg";
import trend from "../assets/trend.svg";

const DiscoverSection = () => {
    return (
        <section id="discover" className="DiscoverSection bg bg1">
            <br/><br/>
            <div className="list discover-list">
                <div className="list-header bg bg3">
                    <img src={discover} alt="D"/>
                    <h2>Discover</h2>
                </div>
                <div className="list-body bg bg2 fg fg3">
                    Discover List Goes Here
                </div>
            </div>
            <br/><br/>
            <div className="list trend-list">
                <div className="list-header bg bg3">
                    <img src={trend} alt="T"/>
                    <h2>Trend</h2>
                </div>
                <div className="list-body bg bg2 fg fg3">
                    Trend List Goes Here
                </div>
            </div>
        </section>
    );
}

export default DiscoverSection;
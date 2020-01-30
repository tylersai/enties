import React from "react";
import "./NoData.css";

const NoData = ({ svgPath, label }) => {
  return (
    <div className="NoData">
      {svgPath ? (
        <img className="animate-fadein" src={svgPath} alt="POSTER" />
      ) : (
        <div className="fg fgg animate-fadein status-code">404</div>
      )}
      <div className="fg fgg animate-fadein">{label ? label : "NOT FOUND"}</div>
    </div>
  );
};

export default NoData;

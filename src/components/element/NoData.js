import React, {useEffect} from "react";
import "./NoData.css";

const NoData = ({ svgPath, label }) => {
    const ref = React.createRef();
    useEffect(() => {
        const fh = document.getElementById("footer").clientHeight;
        document.getElementById("nodata").style.minHeight = (document.documentElement.clientHeight - fh) + "px";
    });
  return (
    <div className="NoData bg bg1" ref={ref} id="nodata">
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

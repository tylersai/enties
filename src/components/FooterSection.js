import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <section className="FooterSection bg bg2" id="footer">
      <div className="footer-wrapper">
        <div className="text-center">
          <div className="logo fg fg1">Enties</div>
          <div className="fg fgg">Entertainment website for movie geeks!</div>
        </div>
        <div>
          <h4>company</h4>
          <div><span className="footer-link">About</span></div>
          <div><span className="footer-link">Jobs</span></div>
          <div><span className="footer-link">Contact Us</span></div>
        </div>
        <div>
          <h4>community</h4>
          <div><span className="footer-link">For Enties</span></div>
          <div><span className="footer-link">For Developers</span></div>
          <div><span className="footer-link">Brand</span></div>
          <div><span className="footer-link">Investor</span></div>
          <div><span className="footer-link">Vendor</span></div>
        </div>
        <div>
          <h4>useful links</h4>
          <div><span className="footer-link">Help</span></div>
          <div><span className="footer-link">Countries</span></div>
          <div><span className="footer-link">Free Mobile App</span></div>
          <div><span className="footer-link">FAQ</span></div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;

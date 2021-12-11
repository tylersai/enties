import React from "react";
import { useNavigate } from "react-router-dom";
import "./FooterSection.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";

const FooterSection = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <section className="FooterSection bg bg2" id="footer">
      <div className="footer-wrapper">
        <div className="text-center">
          <div className="logo fg fg1">
            <span onClick={goHome}>Enties</span>
          </div>
          <div className="fg fgg">Entertainment website for movie geeks!</div>
          <div className="social-icons">
            <a className="social-icon" target="_blank" rel="noopener noreferrer" href="http://twitter.com/thesaihan">
              <img src={twitter} alt="TW" />
            </a>
            <a className="social-icon" target="_blank" rel="noopener noreferrer" href="http://facebook.com/thesaihan">
              <img src={facebook} alt="FB" />
            </a>
            <a className="social-icon" target="_blank" rel="noopener noreferrer" href="http://instagram.com/thesaihan">
              <img src={instagram} alt="IG" />
            </a>
            <a
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              href="http://github.com/thesaihan/enties"
            >
              <img src={github} alt="GH" />
            </a>
          </div>
        </div>
        <div>
          <h4>company</h4>
          <div>
            <span className="footer-link">About</span>
          </div>
          <div>
            <span className="footer-link">Careers</span>
          </div>
          <div>
            <span className="footer-link">Contact Us</span>
          </div>
        </div>
        <div>
          <h4>community</h4>
          <div>
            <span className="footer-link">For Enties</span>
          </div>
          <div>
            <span className="footer-link">For Developers</span>
          </div>
          <div>
            <span className="footer-link">Brand</span>
          </div>
          <div>
            <span className="footer-link">Investor</span>
          </div>
          <div>
            <span className="footer-link">Vendor</span>
          </div>
        </div>
        <div>
          <h4>useful links</h4>
          <div>
            <span className="footer-link">Help</span>
          </div>
          <div>
            <span className="footer-link">Countries</span>
          </div>
          <div>
            <span className="footer-link">Free Mobile App</span>
          </div>
          <div>
            <span className="footer-link">FAQ</span>
          </div>
        </div>
      </div>
      <div className="copy-wrapper">
        <div className="flex-too">
          <div>Terms</div>
          <div>Privacy</div>
          <div>Policy</div>
        </div>
        <div className="copyright">&copy; 2020 Enties, Inc.</div>
      </div>
    </section>
  );
};

export default FooterSection;

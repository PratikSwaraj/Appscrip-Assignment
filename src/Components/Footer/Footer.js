import React from "react";
import "./Footer.css";
import US from "./US.png";
import pay1 from "./pay1.png";
import pay2 from "./pay2.png";
import pay3 from "./pay3.png";
import pay4 from "./pay4.png";
import pay5 from "./pay5.png";
import pay6 from "./pay6.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footertop">
        <div className="footer-newsletter">
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from metta muse.</p>
          <br />
          <br />
          <input type="email" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
        <div>
          <div className="footer-contact">
            <h2>CONTACT US</h2>
            <p>Phone: +44 221 133 5360</p>
            <p>Email: customercare@mettamuse.com</p>
          </div>
          <div className="footer-currency">
            <h2>CURRENCY</h2>
            <img src={US} alt="US" />
            <span> •USD</span>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="footerbottom">
        <div className="footer-company">
          <h3>mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliance Docs</li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <div className="footer-social">
            <h3>FOLLOW US</h3>
            <span>📸 🔗</span>
          </div>
          <div className="footer-payments">
            <h4>mettā muse ACCEPTS</h4>
            <img src={pay1} alt="pay" />
            <img src={pay2} alt="pay" />
            <img src={pay3} alt="pay" />
            <img src={pay4} alt="pay" />
            <img src={pay5} alt="pay" />
            <img src={pay6} alt="pay" />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
